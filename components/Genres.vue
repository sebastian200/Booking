<template>
    <div>
        <select name="countries" id="countries" multiple>
            <option class=" text-gray-800" value="1">Afghanistan</option>
            <option class="text-gray-800" value="2">Australia</option>
            <option class="text-gray-800" value="3">Germany</option>
            <option class="text-gray-800" value="4">Canada</option>
            <option class="text-gray-800" value="5">Russia</option>
        </select>
    </div>
</template>

<script>
export default {
    mounted() {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/gh/habibmhamadi/multi-select-tag@2.0.1/dist/js/multi-select-tag.js';
        script.onload = () => {
            new MultiSelectTag('countries');
        };
        document.head.appendChild(script);
    }
};
</script>

<style>
@import url('https://cdn.jsdelivr.net/gh/habibmhamadi/multi-select-tag@2.0.1/dist/css/multi-select-tag.css');
</style>
