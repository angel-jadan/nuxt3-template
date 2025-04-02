<template>
  <div class="min-h-screen bg-gray-100">
    <header class="bg-white shadow">
      <nav class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div class="hidden md:flex space-x-6">
            <NuxtLink to="/" class="text-gray-600 hover:text-gray-900"> Inicio </NuxtLink>
            <NuxtLink to="/about" class="text-gray-600 hover:text-gray-900">
              Sobre Nosotros
            </NuxtLink>
            <NuxtLink to="/contact" class="text-gray-600 hover:text-gray-900"> Contacto </NuxtLink>
          </div>
          <button class="md:hidden">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>

    <main class="container mx-auto px-4 py-8 h-screen">
      <slot />
    </main>

    <footer class="bg-white shadow mt-auto">
      <div class="container mx-auto px-4 py-4"></div>
    </footer>
  </div>
</template>

<script setup lang="ts"></script>
