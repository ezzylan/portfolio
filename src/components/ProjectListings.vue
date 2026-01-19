<script setup lang="ts">
import { ChevronDown, Github, Globe } from "lucide-vue-next";
import { computed, ref } from "vue";
import { projects } from "../consts";
import type { ProjectType } from "../types";
import Testimonial from "./Testimonial.vue";

const projectType = ref<ProjectType>("client");

const filteredProjects = computed(() =>
  projects.filter((proj) => proj.type === projectType.value),
);
</script>

<template>
  <section class="flex justify-between">
    <h2>
      <span class="fancy-highlight">My Projects</span>
    </h2>

    <div class="dropdown dropdown-end sm:hidden">
      <div tabindex="0" role="button" class="btn btn-soft rounded-field">
        {{ projectType === "client" ? "Client Projects" : "Side Projects" }}
        <ChevronDown />
      </div>

      <ul
        tabindex="-1"
        class="menu dropdown-content bg-base-200 rounded-box z-1 mt-2 p-2 shadow-sm"
      >
        <input
          type="radio"
          name="project-tabs"
          :class="[
            'btn font-medium',
            projectType === 'client' ? 'btn-warning' : 'btn-ghost',
          ]"
          aria-label="Client Projects"
          value="client"
          v-model="projectType"
        />
        <input
          type="radio"
          name="project-tabs"
          :class="[
            'btn font-medium',
            projectType === 'side' ? 'btn-warning' : 'btn-ghost',
          ]"
          aria-label="Side Projects"
          value="side"
          v-model="projectType"
        />
      </ul>
    </div>

    <div class="tabs tabs-box hidden sm:inline-flex">
      <input
        type="radio"
        name="project-tabs"
        class="tab"
        aria-label="Client Projects"
        value="client"
        v-model="projectType"
      />
      <input
        type="radio"
        name="project-tabs"
        class="tab"
        aria-label="Side Projects"
        value="side"
        v-model="projectType"
      />
    </div>
  </section>

  <section class="mt-10 flex flex-col gap-10">
    <div v-for="proj in filteredProjects" class="flex gap-4">
      <div v-if="proj.logoImage" class="w-1/10">
        <img :src="proj.logoImage.src" alt="Project logo" />
      </div>

      <div :class="['space-y-1', proj.logoImage ? 'w-9/10' : 'w-full']">
        <h3>{{ proj.title }}</h3>
        <div class="flex flex-wrap gap-1">
          <span v-for="tech in proj.techs" class="primary-badge">{{
            tech
          }}</span>
        </div>
        <p class="text-base-content/80">{{ proj.description }}</p>
        <div
          :class="[
            'grid grid-cols-2 gap-2',
            { 'sm:grid-cols-3': projectType === 'client' },
          ]"
        >
          <a
            :href="proj.sourceHref"
            target="_blank"
            :class="['btn btn-soft', { 'btn-disabled': !proj.sourceHref }]"
          >
            <Github />
            Source
          </a>
          <a
            :href="proj.liveHref"
            target="_blank"
            :class="[
              'btn btn-soft btn-accent',
              { 'btn-disabled': !proj.liveHref },
            ]"
          >
            <Globe />
            Live
          </a>
          <Testimonial
            v-if="projectType === 'client' && proj.testimonial"
            :testimonial="proj.testimonial"
          />
        </div>
      </div>
    </div>
  </section>
</template>
