<template>
    <div class="w-full h-full flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside class=" lg:w-1/5">
            <nav class="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
                <a class="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 px-4 py-2 w-full text-left justify-start bg-muted hover:bg-muted"
                    href="/examples/forms">Profile</a>
                <a class="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 px-4 py-2 w-full text-left justify-start bg-muted hover:bg-muted"
                    href="/examples/forms">Profile</a>
                <a class="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 px-4 py-2 w-full text-left justify-start bg-muted hover:bg-muted"
                    href="/examples/forms">Profile</a>
            </nav>
        </aside>
        <div>
            <ToggleGroup type="single">
                <ToggleGroupItem value="2" @click="colorMode.preference = 'dark'" aria-label="Toggle bold">
                    <Icon size="20" name="line-md:moon-rising-filled-loop" />
                </ToggleGroupItem>
                <ToggleGroupItem value="3" @click="colorMode.preference = 'system'" aria-label="Toggle italic">
                    <Icon name="bi:circle-half" />
                </ToggleGroupItem>
                <ToggleGroupItem value="4" @click="colorMode.preference = 'light'" aria-label="Toggle underline">
                    <Icon size="20" name="line-md:moon-filled-alt-to-sunny-filled-loop-transition" />
                </ToggleGroupItem>
            </ToggleGroup>
        </div>
    </div>
</template>
<script lang="ts" setup>
const toggleStateSingle = ref('light')
const colorMode = useColorMode()
const handleThemeChange = (value: string) => {


    colorMode.preference = value
}
</script>