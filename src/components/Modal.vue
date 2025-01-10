<script lang="ts" setup>
import { computed } from "vue";
import { useModalStore } from "@/stores/modalStore";

const modalStore = useModalStore();
</script>

<template>
  <Transition name="modal">
    <div
      v-if="modalStore.isModalOpen"
      class="modal-overlay"
      @click="modalStore.closeModal"
    >
      <div class="modal-content" @click.stop>
        <slot />
      </div>
    </div>
  </Transition>
</template>


<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
}

.modal-content {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 40px;
  border-radius: 16px;
  z-index: 20;
  width: 60%;
  max-width: 480px;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: translate(-50%, -60%);
}
</style>
