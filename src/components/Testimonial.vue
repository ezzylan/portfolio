<script setup lang="ts">
import { MessageSquareQuote, X } from "lucide-vue-next";
import { useTemplateRef } from "vue";
import type { Testimonial } from "../types";

defineProps<{ testimonial: Testimonial }>();

const testimonialModal = useTemplateRef<HTMLDialogElement>("testimonial");
</script>

<template>
  <button
    :class="[
      'btn btn-soft btn-warning col-span-2 sm:col-span-1',
      { 'btn-disabled': !testimonial },
    ]"
    @click="testimonialModal!.showModal"
  >
    <MessageSquareQuote />
    Testimonial
  </button>
  <dialog ref="testimonial" class="modal">
    <div class="modal-box">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute top-2 right-2">
          <X />
        </button>
      </form>
      <blockquote class="bg-accent-content mt-6 mb-4 rounded-xl p-4">
        "{{ testimonial.quote }}"
      </blockquote>
      <h3 class="font-bold">{{ testimonial.name }}</h3>
      <p class="italic">{{ testimonial.position }}</p>
    </div>
  </dialog>
</template>
