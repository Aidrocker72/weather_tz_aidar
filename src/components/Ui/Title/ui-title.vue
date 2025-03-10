<template>
<div class="ui-title">
    {{ title }}
</div>
</template>

<script lang="ts" setup>
import type { ITitleProps } from '@/interfaces/Ui/ITitleProps';

const { title = '' } = defineProps<ITitleProps>();
</script>

<style lang="scss">
.ui-title {
    font-size: 36px;
    font-weight: 600;
    color: #fff;

    margin-top: 56px;
}
</style>