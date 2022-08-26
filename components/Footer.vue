<template>
  <footer class="footer">
    <div class="wide-container wide-container--without-max-width">
      <div class="footer__inner">
        <div class="container container--without-padding">
          <div class="footer__top">
            <div class="footer__letter">
              <div class="footer__letter-icon">
                <LetterIcon class="footer__letter-icon-svg" />
              </div>
              <p>Присылаем только интересное и важное</p>
            </div>
            <form class="footer__letter-form">
              <label
                class="visually-hidden"
                for="letterFormMail"
              >Напишите свою почту</label>
              <input
                id="letterFormMail"
                class="footer__letter-input"
                type="email"
                name="letterFormMail"
                placeholder="Мой e-mail"
              >
              <button class="footer__letter-button button button--white button-form">
                <span>Отправить</span>
              </button>
            </form>
          </div>
          <div class="footer__middle">
            <div class="footer__middle-top-wrapper">
              <FooterLogo />
              <ul class="footer__social-list">
                <li
                  v-for="icon of socialIcons"
                  :key="icon.id"
                >
                  <div class="footer__social-item">
                    <a
                      class="footer__social-link"
                      href="icon.url"
                    >
                      <img
                        :src="icon.pic"
                        alt="Социальная сеть"
                      >
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div class="footer__middle-bottom-wrapper">
              <nav class="footer__nav">
                <ul class="footer__nav-list">
                  <li
                    v-for="mainItem of menu"
                    :key="mainItem.id"
                  >
                    <h3 class="footer__nav-main-link">
                      {{mainItem.title}}
                    </h3>
                    <ul class="footer__nav-sublist">
                      <li
                        v-for="secondItem of mainItem.submenu"
                        :key="secondItem.id"
                      >
                        <a
                          class="footer__nav-link"
                          href="secondItem.url"
                        >{{secondItem.name}}</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
              <div class="footer__contacts">
                <a
                  class="footer__contacts-phone"
                  href="tel:84957975775"
                >+7 (495) 797-57-75</a>
                <address class="footer__contacts-address">129085, г. Москва, Звездный бульвар, д. 21, корп. 1</address>
              </div>

            </div>
          </div>
          <div class="footer__bottom">
            <span class="footer__copyright">©1993 – 2021 AUVIX </span>
            <span class="footer__made">Сделано в AIC</span>
          </div>

        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import LetterIcon from '@/assets/icons/Letters.svg'

export default {
  name: 'FooterMain',
  components: {
    LetterIcon,
  },
  data: () => ({
    socialIcons: [
      {
        id: 1,
        pic: '/images/icons/telegram.svg',
        url: '#',
      },
      {
        id: 2,
        pic: '/images/icons/youtube.svg',
        url: '#',
      },
    ],
    menu: [
      {
        id: 1,
        title: 'Компания',
        submenu: [
          {
            id: 1,
            name: 'Контакты',
            url: '#',
          },
          {
            id: 2,
            name: 'Работа у нас',
            url: '#',
          },
          {
            id: 3,
            name: 'Новости компании',
            url: '#',
          },
          {
            id: 4,
            name: 'Сферы деятельности',
            url: '#',
          },
        ],
      },
      {
        id: 2,
        title: 'Академия экспертов',
        submenu: [
          {
            id: 1,
            name: 'Мерприятия',
            url: '#',
          },
          {
            id: 2,
            name: 'Статьи',
            url: '#',
          },
          {
            id: 3,
            name: 'Обзоры',
            url: '#',
          },
          {
            id: 4,
            name: 'Новости',
            url: '#',
          },
        ],
      },
      {
        id: 3,
        title: 'Услуги и сервисы',
        submenu: [
          {
            id: 1,
            name: 'Сервисное обслуживание',
            url: '#',
          },
          {
            id: 2,
            name: 'Доставка и самовывоз',
            url: '#',
          },
        ],
      },
      {
        id: 4,
        title: 'Каталог',
        submenu: [
          {
            id: 1,
            name: 'Продукция',
            url: '#',
          },
          {
            id: 2,
            name: 'Партнеры',
            url: '#',
          },
        ],
      },
    ],
  }),
}
</script>

<style lang="scss" scoped>
.footer {
  padding-bottom: 0.8rem;
  color: #fff;

  &__inner {
    padding: 5.2rem 5.2rem 2.4rem;

    border-radius: 2rem;
    background-color: var(--dark);

    @media (max-width: 1599px) {
      padding: 4.8rem 2rem 3.2rem;
    }

    @media (max-width: 1199px) {
      padding-bottom: 2rem;
    }

    @media (max-width: 1023px) {
      padding: 3.2rem 1.6rem 2rem;
    }

    @media (max-width: 767px) {
      padding: 4rem 1.6rem 2rem;
    }
  }

  &__top {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    padding-bottom: 5.2rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.37);

    @media (max-width: 1599px) {
      padding-bottom: 4.8rem;
    }

    @media (max-width: 1023px) {
      padding-bottom: 2.4rem;
    }

    @media (max-width: 767px) {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      gap: 2rem;
      padding-bottom: 2rem;
    }
  }

  &__letter {
    display: flex;
    align-items: center;
    gap: 2.4rem;

    @media (max-width: 767px) {
      gap: 2.8rem;
    }

    p {
      max-width: 25rem;
      font-size: 2.4rem;

      @media (max-width: 1199px) {
        font-size: 2rem;
      }

      @media (max-width: 767px) {
        font-size: 1.8rem;
      }
    }
  }

  &__letter-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    width: 10.4rem;
    height: 6.4rem;

    border-radius: 3.2rem;
    background-image: linear-gradient(
      142.67deg,
      #34373e 25.36%,
      rgba(52, 55, 62, 0) 78.36%
    );

    @media (max-width: 767px) {
      width: 8rem;
      height: 4.8rem;
    }
  }
}

.footer__letter-icon-svg {
  width: 4rem;
  height: 4rem;

  @media (max-width: 767px) {
    width: 3.2rem;
    height: 3.2rem;
  }
}

.footer__letter-form {
  position: relative;

  display: flex;
  align-items: center;
  gap: 0.4rem;
  flex-grow: 1;

  @media (max-width: 940px) {
    max-width: none;
  }
}

.footer__letter-input {
  padding: 1.6rem 2rem;

  font-size: 1.8rem;
  line-height: 1.3;
  color: #fff;

  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 1.2rem;

  @media (max-width: 1599px) {
    padding: 1.8rem 1.6rem;
    font-size: 1.6rem;
  }

  @media (max-width: 1023px) {
    padding: 1.6rem;
    padding-right: 5.2rem;
  }

  &::placeholder {
    font-size: inherit;
    line-height: inherit;
    color: rgba(255, 255, 255, 0.75);
  }
}

.footer__letter-button {
  padding: 1.6rem 4rem;

  @media (max-width: 1199px) {
    padding: 1.8rem 4rem;
  }

  @media (max-width: 1023px) {
    padding: 1.5rem 1.3rem;
  }
}

.footer__middle-top-wrapper {
  display: flex;
  align-self: center;
  justify-content: space-between;
  padding: 4rem 0;

  @media (max-width: 1023px) {
    padding: 2.4rem 0 4rem;
  }

  @media (max-width: 767px) {
    padding: 2rem 0 2.8rem;
    gap: 2rem;
  }

  @media (max-width: 520px) {
    flex-direction: column;
  }
}

.footer__social-list {
  display: flex;
  gap: 0.4rem;

  @media (max-width: 767px) {
    margin-top: 0;
    gap: 0;
  }
}

.footer__social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8rem;
  height: 4.8rem;

  border: 1px solid rgba(255, 255, 255, 0.37);
  border-radius: 10rem;

  transition: 0.3s;

  @media (max-width: 1199px) {
    width: 6.4rem;
    height: 4rem;
  }

  @media (max-width: 1023px) {
    width: 5.6rem;
    height: 3.6rem;
  }

  @media (max-width: 355px) {
    width: 5.4rem;
    height: 3.6rem;

    border-radius: 7.2rem;
  }

  img {
    max-width: 2.2rem;
    height: 2.2rem;

    @media (max-width: 1023px) {
      width: 1.8rem;
      height: 1.8rem;
    }
  }

  &:hover {
    border-color: #fff;
    opacity: 1;
  }

  &:active {
    border-color: rgba(255, 255, 255, 0.37);
    color: rgba(255, 255, 255, 0.37);
  }
}

.footer__middle-bottom-wrapper {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 0.4rem;
  padding-bottom: 6.4rem;

  @media (max-width: 1599px) {
    padding-bottom: 4.8rem;
  }

  @media (max-width: 1023px) {
    grid-template-columns: 1fr 1fr;
    padding-bottom: 4rem;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 2.8rem 0;
    padding-bottom: 1.2rem;
  }
}

.footer__nav {
  grid-column: span 9;

  @media (max-width: 1199px) {
    grid-column: span 8;
  }

  @media (max-width: 1023px) {
    grid-column: span 1;
  }
}

.footer__nav-list {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 0.4rem;

  @media (max-width: 1480px) {
    grid-template-columns: repeat(12, 1fr);
  }

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
  }

  & > li {
    grid-column: span 2;

    @media (max-width: 1480px) {
      grid-column: span 3;
      padding-left: 2rem;

      &:first-child {
        padding-left: 0;
      }
    }

    @media (max-width: 1023px) {
      padding-left: 0;
    }

    &.active {
      svg {
        transform-origin: 50% 40%;
        transform: rotate(-90deg);
      }
    }
  }
}

.footer__nav-main-link {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 3.2rem;

  font-size: 2rem;
  font-weight: 400;
  line-height: 1.2;

  @media (max-width: 1599px) {
    margin-bottom: 2.8rem;
    max-width: 14rem;
  }

  @media (max-width: 1199px) {
    font-size: 1.8rem;
    margin-bottom: 2.4rem;
  }

  @media (max-width: 1023px) {
    align-items: center;
    max-width: none;
    margin-bottom: 2rem;

    font-size: 2rem;
    cursor: pointer;
  }

  @media (max-width: 767px) {
    margin-bottom: 1.6rem;
  }

  svg {
    display: none;

    @media (max-width: 1023px) {
      display: block;
      width: 0.6rem;
      height: 0.8rem;

      transform: rotate(90deg);

      transition: 0.3s;
    }
  }
}

.footer__nav-sublist {
  display: flex;
  flex-direction: column;
  gap: 2rem;

  overflow: hidden;

  @media (max-width: 1023px) {
    height: 0;
    gap: 0;
  }
}

.footer__nav-link {
  font-size: 1.8rem;
  color: rgba(255, 255, 255, 0.75) !important;

  @media (max-width: 1199px) {
    font-size: 1.6rem;
  }

  @media (max-width: 1023px) {
    display: block;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 767px) {
    font-size: 1.4rem;
  }
}

.footer__contacts {
  grid-column: span 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  text-align: right;

  @media (max-width: 1199px) {
    grid-column: span 4;
  }

  @media (max-width: 1023px) {
    grid-column: span 1;
  }

  @media (max-width: 767px) {
    order: -1;
    align-items: flex-start;
    text-align: left;
    gap: 1.2rem;
  }
}

.footer__contacts-phone {
  font-size: 2rem;
  line-height: 1.2;

  @media (max-width: 767px) {
    display: block;
  }
}

.footer__contacts-address {
  max-width: 32rem;

  font-size: 2rem;
  line-height: 1.2;
}

.footer__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.4rem 0 0;

  border-top: 1px solid rgba(255, 255, 255, 0.37);

  @media (max-width: 1599px) {
    padding-top: 2.4rem;
  }

  @media (max-width: 1199px) {
    padding-top: 2rem;
  }

  span {
    font-size: 1.8rem;
    line-height: 1.3;
    color: rgba(255, 255, 255, 0.75);

    @media (max-width: 1199px) {
      font-size: 1.6rem;
    }

    @media (max-width: 767px) {
      font-size: 1.4rem;
    }
  }
}
</style>