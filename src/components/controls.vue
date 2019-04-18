<template>
  <div class="controls">
    <input
      ref="filter"
      :placeholder="`${$t('Filter')}...`"
      class="form-control form-control-sm"
      type="text"
      v-model="filterQuery"
    >

    <div class="list draggable-container">
      <div v-for="(items, category) in controls" :key="category">
        <h2>{{ $t(category) }}</h2>
        <div
          v-for="(control, index) in items"
          :key="index"
          :transfer-data="{type: control.type}"
          v-if="control.label.toLowerCase().includes(filterQuery.toLowerCase())"
          :data-test="control.type"
          class="dropzone draggable-dropzone--occupied"
        >
          <div class="tool draggable-source">
            <div class="img-container">
              <img :src="control.icon">
            </div>
            <div>{{ $t(control.label) }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['controls'],
  data() {
    return {
      filterQuery: '',
    };
  },
};
</script>

<style lang="scss" scoped>
.controls {
  user-select: none;
  background: #eee;
  border-right: 1px solid #aaa;
  width: 320px;
  text-align: left;
  display: flex;
  flex-direction: column;

  .list {
    overflow: auto;
    height: 100%;

    h2 {
      background: #aaa;
      border-top: 1px solid #999;
      border-bottom: 1px solid #999;
      padding-left: 8px;
      margin-bottom: 0px;
      font-size: 0.75em;
      font-weight: bold;
      padding-bottom: 8px;
      padding-top: 8px;
    }

    .draggable--original {
      display: none !important;
    }

    .tool {
      background: #eee;
      display: flex;
      align-items: center;
      font-size: 0.75em;
      padding: 4px;
      font-weight: bold;
      color: #333;
      cursor: grab;

      &.draggable-mirror {
        pointer-events: auto !important;
        background: #eee !important;
        z-index: 2;
        cursor: grabbing !important;
        box-shadow: 5px 5px 8px 0px #0000004a;
      }

      &:not(.draggable-mirror):hover {
        background: #3397e1;
        color: white;
      }

      .img-container {
        margin-right: 8px;
        width: 32px;
        text-align: center;
      }
    }
  }
}
</style>
