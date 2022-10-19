<template>
  <section class="contacts__requisites">
    <div class="container">
      <h2 class="contacts__requisites-title section-title">{{pageProps.title}}</h2>
    </div>
    <div class="wide-container">
      <table class="contacts__requisites-table">
        <tr
          class="contacts__requisites-row"
          :style="{'grid-template-columns': `repeat(${pageProps.table_data.cols.length}, 1fr)`}"
        >
          <td
            v-for="col of pageProps.table_data.cols"
            :key="col.id"
            class="contacts__requisites-cell"
          >{{col.name}}</td>
        <tr
          v-for="row of pageProps.table_data.rows"
          :key="row.id"
          class="contacts__requisites-row"
          :style="{'grid-template-columns': `repeat(${pageProps.table_data.cols.length}, 1fr)`}"
        >
          <td
            v-for="el of row"
            :key="el.id"
            class="contacts__requisites-cell"
          >{{el.value}}</td>
        </tr>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Table',
  props: {
    pageProps: Object,
  },
}
</script>

<style lang="scss" scoped>
.contacts__requisites {
  margin-bottom: 5rem;

  @media (max-width: 767px) {
    margin-bottom: 3rem;
  }
}

.contacts {
  &__requisites {
    padding-bottom: 0.8rem;
  }

  &__requisites-title {
    margin-bottom: 4rem;

    @media (max-width: 1599px) {
      margin-bottom: 3.6rem;
    }

    @media (max-width: 1199px) {
      margin-bottom: 3.2rem;
    }

    @media (max-width: 1023px) {
      margin-bottom: 2.8rem;
    }

    @media (max-width: 767px) {
      margin-bottom: 2rem;
    }
  }

  &__requisites-table {
    display: flex;
    flex-direction: column;

    border: 1px solid var(--border-grey);
    border-radius: 2rem;
    background-color: rgba(239, 240, 244, 0.2);
    overflow: hidden;

    @media (max-width: 1023px) {
      border-radius: 1.6rem;
    }

    @media (max-width: 767px) {
      border-radius: 1.2rem;
    }
  }

  &__requisites-row {
    display: grid;
    // grid-template-columns: repeat(2, 1fr);
    gap: 0.4rem;
    padding: 2.8rem 5.2rem;

    border-bottom: 1px solid var(--border-grey);

    font-size: 1.8rem;
    line-height: 1.3;

    @media (max-width: 1599px) {
      padding: 2.8rem 2rem;
    }

    @media (max-width: 1199px) {
      padding: 2rem;

      font-size: 1.6rem;
      line-height: 1.25;
    }

    @media (max-width: 1023px) {
      padding: 1.6rem;
    }

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
      gap: 0.8rem;
    }

    &:first-child {
      background-color: rgba(239, 240, 244, 1);
    }

    &:last-child {
      border-bottom: 0;
    }
  }

  &__requisites-cell {
    &:first-child {
      color: var(--jack-grey);
    }
  }
}
</style>