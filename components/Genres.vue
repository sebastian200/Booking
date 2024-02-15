<template>
    <div>
        <select name="countries" id="countries" multiple>

<option value="fantasy">Fantasy</option>
<option value="science-fiction">Science Fiction</option>
<option value="mystery">Mysterium</option>
<option value="romance">Romantik</option>
<option value="thriller">Thriller</option>
<option value="horror">Skräck</option>
<option value="historical-fiction">Historisk Skönlitteratur</option>
<option value="biography">Biografi</option>
<option value="self-help">Självhjälp</option>
<option value="adventure">Äventyr</option>
<option value="dystopian">Dystopi</option>
<option value="young-adult">Ung Vuxen</option>
<option value="crime">Brott</option>
<option value="non-fiction">Fakta</option>
<option value="poetry">Poesi</option>
<option value="comedy">Komedi</option>
<option value="drama">Drama</option>
<option value="action">Action</option>
<option value="historical">Historisk</option>
<option value="western">Västern</option>
<option value="fantasy-romance">Fantasy Romance</option>
<option value="sci-fi-fantasy">Sci-Fi Fantasy</option>
<option value="psychological-thriller">Psychological Thriller</option>
<option value="paranormal">Paranormal</option>
<option value="urban-fantasy">Urban Fantasy</option>
<option value="historical-romance">Historical Romance</option>


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

.price-range-slider {
    width: 300px;
  }
  
  input[type=range] {
    width: calc(100% - 60px);
  }
  
</style>
