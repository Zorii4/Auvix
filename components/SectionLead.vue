<template>
  <div class="section-lead">
    <div
      v-if="title"
      class="section-lead__column"
    >
      <h2 class="section-lead__title section-title">{{title}}</h2>
    </div>
    <div class="section-lead__column">
      <h3
        v-if="sub_title"
        class="section-lead__subtitle"
      >{{sub_title}}</h3>
      <div
        v-if="description"
        class="section-lead__text"
      >
        <p>{{description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionLead',
  props: {
    title: String,
    sub_title: String,
    description: String,
  },
}
</script>

<style lang="scss" scoped>
.section-lead {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3.6rem 0.4rem;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 767px) {
    gap: 2.4rem;
  }

  &__title {
    margin: 0;
  }

  &__column {
    display: flex;
    flex-direction: column;
    gap: 4rem;

    @media (max-width: 1199px) {
      gap: 3.2rem;
    }

    @media (max-width: 1023px) {
      gap: 2.8rem;
    }

    @media (max-width: 767px) {
      gap: 2rem;
    }

    p {
      font-size: 2rem;
      line-height: 1.4;
      color: var(--easy-dark);

      @media (max-width: 1199px) {
        font-size: 1.8rem;
        line-height: 1.3;
      }

      @media (max-width: 767px) {
        font-size: 1.6rem;
        line-height: 1.25;
      }
    }
  }

  &__subtitle {
    font-weight: 400;
    font-size: 2.8rem;
    line-height: 1.3;

    @media (max-width: 1199px) {
      font-size: 2.4rem;
      line-height: 1.2;
    }

    @media (max-width: 767px) {
      font-size: 2rem;
    }
  }
}
</style>