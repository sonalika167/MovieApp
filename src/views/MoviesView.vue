<template>
  <div>
    <h2 class="title">
      <font-awesome-icon 
        icon="film" 
        size="1x" />&nbsp;
        Upcoming Movies
      </h2>
    <ItemList :results="results" type="movie" @item-clicked="viewDetailInfo" />
    <ItemListMore :loading="loading" :loadMore="loadMore" @view-more="fetchData('MORE')"/>
  </div>
</template>



<style lang="scss" scoped>
</style>