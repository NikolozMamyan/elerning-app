<!-- src/views/DashboardView.vue -->
<script setup>
import { ref, onMounted } from "vue";

const courses = ref([]);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const res = await fetch("http://localhost:8000/api/dashboard", {
      method: "POST",
      credentials: "include", // récupère le cookie AUTH_TOKEN
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Erreur API");

    courses.value = data.courses;
    console.log(courses.value)
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
});
</script>


<template>
  <div class="grid" aria-labelledby="dash-title">
    <!-- Disponible si tu veux un titre de page -->
    <h2 id="dash-title" class="sr-only">Dashboard</h2>

    <!-- Available Courses -->
    <section class="card card-pad vstack" style="gap:10px">
      <h3 class="section-title">Available Courses</h3>
      <p class="small" style="margin:0 0 6px 0">
        Explore all the courses currently available to you. Stay up-to-date with compliance,
        finance, project management, and personal development modules.
      </p>

      <div class="list" role="list">
<div
  v-for="(cours, i) in courses"
  :key="cours.id"
  role="listitem"
  class="item"
  :style="{
    background: i === 1 ? 'var(--brand-50)' : '#fff',
    borderColor: i === 1 ? '#cfecea' : 'var(--border)'
  }"
>
  <span class="left"><strong>{{ cours.title }}</strong></span>
  <span class="chev" aria-hidden="true">›</span>
</div>


      </div>
    </section>

    <!-- Progress Tracking -->
    <section class="card card-pad vstack" style="gap:14px">
      <h3 class="section-title">Progress Tracking</h3>
      <ProgressBar
        v-for="p in progress"
        :key="p.label"
        :label="p.label"
        :value="p.value"
      />
      <div style="text-align:center; margin-top:6px">
        <a href="#"><strong>View My Courses</strong></a>
      </div>
    </section>

    <!-- Transactions -->
    <section class="card card-pad vstack" style="gap:10px">
      <h3 class="section-title">Transactions</h3>

      <div class="txn-row" v-for="t in transactions" :key="t.title">
        <strong>{{ t.title }}</strong>
        <div class="hstack" style="justify-content:space-between">
          <span class="small">{{ t.date }}</span>
          <span class="mono"><strong>${{ t.amount.toFixed(2) }}</strong></span>
        </div>
      </div>

      <div style="margin-top:6px">
        <button class="btn" style="width:100%">View All</button>
      </div>
    </section>

    <!-- My Certificates -->
    <section class="card card-pad vstack" style="gap:10px">
      <div class="hstack" style="justify-content:space-between">
        <h3 class="section-title" style="margin:0">My Certificates</h3>
        <a href="#" class="small">View All</a>
      </div>

      <div class="grid-2">
        <div v-for="c in certificates" :key="c.title" class="item">
          <div class="left">
            <span class="badge" aria-label="Document PDF">PDF</span>
            <strong>{{ c.title }}</strong>
          </div>
          <a href="#" class="small">Télécharger</a>
        </div>
      </div>

      <div>
        <button class="btn">Download All</button>
      </div>
    </section>

    <!-- Recent Videos -->
    <section class="card card-pad vstack" style="gap:10px">
      <div class="hstack" style="justify-content:space-between">
        <h3 class="section-title" style="margin:0">Recent Videos</h3>
        <a href="#" class="small">View All</a>
      </div>

      <div class="grid-2">
        <article v-for="v in videos" :key="v.title" class="video">
          <div class="thumb" :aria-label="`Preview ${v.title}`">
            <div class="play" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M8 5v14l11-7z" fill="currentColor" stroke="none"/>
              </svg>
            </div>
          </div>
          <div class="body">
            <div class="hstack" style="justify-content:space-between">
              <strong>{{ v.title }}</strong>
              <span
                class="badge"
                :style="{
                  background: v.status==='In Progress' ? '#fff5e3' : 'var(--chip)',
                  color: v.status==='In Progress' ? '#a36b00' : 'var(--muted)'
                }"
              >{{ v.status }}</span>
            </div>
            <div class="hstack small" style="justify-content:space-between; margin-top:6px">
              <span>Cartographie des risques LBC/FT</span>
              <span class="mono">{{ v.duration }}</span>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- Élément fantôme pour équilibrer la grille à 3 colonnes -->
    <div aria-hidden="true"></div>
  </div>
</template>

<style scoped>
/* Aucun style lourd ici : la responsivité repose sur assets/base.css */
.sr-only{
  position:absolute !important; width:1px; height:1px; overflow:hidden;
  clip:rect(1px, 1px, 1px, 1px); white-space:nowrap; border:0; padding:0; margin:-1px;
}
</style>
