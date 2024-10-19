<script setup lang="ts">
import type { NavItem } from '@nuxt/content'
import type { NavigationMenuItem } from '#ui/types'

defineProps<{
  links: NavigationMenuItem[]
}>()

const config = useRuntimeConfig().public

const navigation = inject<Ref<NavItem[]>>('navigation')

defineShortcuts({
  meta_g: () => {
    window.open('https://github.com/justserdar/nitro-coolify', '_blank')
  },
})
</script>

<template>
  <UHeader :ui="{ left: 'min-w-0' }">
    <template #left>
      <NuxtLink
        to="/"
        class="flex items-end gap-2 font-bold text-xl text-[var(--ui-text-highlighted)] min-w-0 focus-visible:outline-[var(--ui-primary)]"
        aria-label="Nuxt UI"
      >
        Nuxt Coolify

        <UBadge
          :label="`v${config.version}`"
          variant="subtle"
          size="sm"
          class="font-semibold inline-block truncate place-self-center"
        />
      </NuxtLink>
    </template>

    <UNavigationMenu
      :items="links"
      variant="link"
    />

    <template #right>
      <UTooltip
        text="Search"
        :kbds="['meta', 'K']"
      >
        <UContentSearchButton />
      </UTooltip>

      <UTooltip
        text="Open on GitHub"
        :kbds="['meta', 'G']"
      >
        <UButton
          color="neutral"
          variant="ghost"
          to="https://github.com/justserdar/nitro-coolify"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </UTooltip>
    </template>

    <template #content>
      <UNavigationMenu
        orientation="vertical"
        :items="links"
        class="-ml-2.5"
      />

      <USeparator
        type="dashed"
        class="my-4"
      />

      <UContentNavigation :navigation="navigation" />
    </template>
  </UHeader>
</template>
