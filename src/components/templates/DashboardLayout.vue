<template>
  <div class="flex h-screen font-roboto">
    <div class="flex flex-col flex-1 overflow-hidden">
      <Header />
      <main class="flex-1 overflow-x-hidden overflow-y-auto">
        <div class="container px-6 py-8 mx-auto">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>
