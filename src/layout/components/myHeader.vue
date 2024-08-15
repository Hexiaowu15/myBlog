<template>
  <div class="myHeader">
    <div class="logo">
    </div>
    <div class="search">
      <el-autocomplete v-model="value" clearable placeholder="Please Input" @select="handleSearch"
        :fetch-suggestions="querySearch" :trigger-on-focus="true" fit-input-width select-when-unmatched>
        <template #suffix>
          <el-icon class="el-input__icon" size="20" @click="handleSearch">
            <Search />
          </el-icon>
        </template>
        <template #default="{ item }">
          <div class="value">{{ item.value }}</div>
        </template>
      </el-autocomplete>
    </div>
    <div class="right"></div>
  </div>
</template>

<script setup lang="ts">
let value = ref("")
function handleSearch(params: Record<string, any>) {
  console.log(params);
}
function querySearch(params: string, cb: Function) {
  cb(
    [{ value: "a" }, { value: "b" }]
  )
}
</script>

<style lang="scss" scoped>
.myHeader {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  .logo {
    width: 200px;
    height: 72px;
    background: url('/src/assets/logo/logo.png') no-repeat center left/60%;
  }

  .search {
    width: 500px;

    .el-input__icon:hover {
      cursor: pointer;
    }

    :deep(.el-input__wrapper) {
      border-radius: 999px;
    }

    :deep(.el-input__inner) {
      height: 40px;
      padding: 0 5px;
    }

  }

  .right {
    width: 200px;
  }
}

.popper {
  background: red;
}
</style>