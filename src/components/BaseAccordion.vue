<template>
    <div class="faq">
        <div class="header" @click="handleClick(faq)">
            <div class="question" v-html="faq.question"></div>
            <div class="faq_svg">
                <svg class="faq_svg__minus" xmlns="http://www.w3.org/2000/svg" width="29" height="2" viewBox="0 0 29 2"
                    fill="none">
                    <path d="M0 1.0802H29" stroke="black" />
                </svg>
                <svg class="faq_svg__minus" :class="{ 'faq_svg__minus_close': faq.isOpen }"
                    xmlns="http://www.w3.org/2000/svg" width="29" height="2" viewBox="0 0 29 2" fill="none">
                    <path d="M0 1.0802H29" stroke="black" />
                </svg>
            </div>
        </div>
        <div v-if="faq.mainPageItem" class="answer" :class="{ 'open': faq.isOpen }">
            <div class=fqa-flex>
                <div class=fqa-num>01</div>
                <div class=fqa-text>
                    <span>
                        Организует ежегодные научные экспедиции совместно с&nbsp;сотрудниками РАН, где изучает
                        экосистемы
                        дивизионов и&nbsp;наблюдает за&nbsp;состоянием биоразнообразия.
                    </span>
                </div>
            </div>

            <div class=fqa-flex>
                <div class=fqa-num>02</div>
                <div class=fqa-text>
                    <span>
                        Проводит исследования и&nbsp;эксперименты по&nbsp;стимулированию естественного восстановления
                        природных
                        сред.
                    </span>
                </div>
            </div>

            <div class=fqa-flex>
                <div class=fqa-num>03</div>
                <div class=fqa-text>
                    <span>Поддерживает работу </span>
                    <BaseTooltip :word="'ООПТ'">
                        <span>
                            Особо охраняемые природные территории&nbsp;&mdash; участки земли или воды, где природа
                            и&nbsp;её&nbsp;биоразнообразие защищены государством. Создаются для сохранения редких
                            и&nbsp;уязвимых видов растений, животных и&nbsp;экосистем, а&nbsp;также для поддержания
                            природных
                            процессов и&nbsp;культурных ценностей. К&nbsp;ООПТ относятся заповедники, национальные
                            парки,
                            природные заказники или другие участки с&nbsp;особыми правилами и&nbsp;ограничениями,
                            направленными
                            на&nbsp;долгосрочную защиту природы. <br />Всего в&nbsp;России 13&nbsp;тысяч ООПТ, они
                            занимают&nbsp;12% площади страны.
                        </span>
                    </BaseTooltip>
                    <span> и&nbsp;их&nbsp;отдельные научно-исследовательские программы.</span>
                </div>
            </div>

            <div class=fqa-flex>
                <div class=fqa-num>04</div>
                <div class=fqa-text>
                    <span>
                        Спонсирует программы по&nbsp;изучению и&nbsp;охране редких и&nbsp;исчезающих видов животных
                        и&nbsp;растений.
                    </span>
                </div>
            </div>

            <div class=fqa-flex>
                <div class=fqa-num>05</div>
                <div class=fqa-text>
                    <span>
                        Восстанавливает нарушенные земельные участки, приводит их&nbsp;к&nbsp;исходному или более
                        благоприятному состоянию.
                    </span>
                </div>
            </div>

            <div class=fqa-flex>
                <div class=fqa-num>06</div>
                <div class=fqa-text>
                    <span>
                        Снижает уровень загрязнённости воздуха SO₂ с&nbsp;помощью систем улавливания на&nbsp;действующих
                        и&nbsp;проектируемых предприятиях (&laquo;Серная программа&raquo;).
                    </span>
                </div>
            </div>

            <div class=fqa-flex>
                <div class=fqa-num>07</div>
                <div class=fqa-text>
                    <span>
                        Строит и&nbsp;модернизирует локальные очистные сооружения на&nbsp;предприятиях, чтобы уменьшить
                        количество загрязняющих веществ, поступающих в&nbsp;водоёмы вместе со&nbsp;сбросами сточных вод.
                    </span>
                </div>
            </div>

            <div class=fqa-flex>
                <div class=fqa-num>08</div>
                <div class=fqa-text>
                    <span>
                        Организует выпуск мальков ценных пород рыбы в&nbsp;водные бассейны российских рек.
                    </span>
                </div>
            </div>

            <div class=fqa-flex>
                <div class=fqa-num>09</div>
                <div class=fqa-text>
                    <span>
                        Отслеживает состояние мест, где размещаются отходы, и&nbsp;здоровье экосистем вокруг таких
                        объектов.
                    </span>
                </div>
            </div>

            <div class=fqa-flex>
                <div class=fqa-num>10</div>
                <div class=fqa-text>
                    <span>
                        Соблюдает шумовой режим при взрывных и&nbsp;других работах.
                    </span>
                </div>
            </div>

            <div class=fqa-flex>
                <div class=fqa-num>11</div>
                <div class=fqa-text>
                    <span>
                        Отслеживает уровень загрязнённости природных сред с&nbsp;помощью экологического мониторинга.
                    </span>
                </div>
            </div>

            <div class=fqa-flex>
                <div class=fqa-num>12</div>
                <div class=fqa-text>
                    <span>
                        Повышает готовность к&nbsp;аварийным ситуациям, которые могут повлиять на&nbsp;окружающую
                        природную среду.
                    </span>
                </div>
            </div>

            <div class=fqa-flex>
                <div class=fqa-num>13</div>
                <div class=fqa-text>
                    <span>
                        Ограничивает некоторые виды работ там, где были обнаружены наиболее значимые ценности
                        биоразнообразия: охраняемые виды и&nbsp;уникальные природные экосистемы.
                    </span>
                </div>
            </div>
        </div>
        <div v-else class="answer" :class="{ 'open': faq.isOpen }">
            <div v-if="faq.answer" v-html="faq.answer" />
            <div v-else>
                <slot />
            </div>
        </div>
    </div>
</template>

<script>
import BaseTooltip from '@/components/BaseTooltip.vue'
export default {
    components: {
        BaseTooltip
    },
    props: {
        faq: {
            type: Object,
            default: null
        }
    },

    methods: {
        handleClick(faq) {
            faq.isOpen = !faq.isOpen
        }
    },
}
</script>

<style lang="scss">
.faq {
    flex-grow: 1;

    @media (max-width: 768px) {
        margin: 0 5.3334rem;
    }

    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 2.09rem 0.7rem;
        cursor: pointer;

        @media (max-width: 768px) {
            padding: 6.4rem 0;
        }

        .question {
            font-size: 1.5278rem;
            font-weight: 600;
            line-height: 130%;

            @media (max-width: 768px) {
                font-size: 4.8rem;
            }
        }

        .faq_svg {
            position: relative;
            display: flex;
            margin-right: 0.695rem;
            width: 2.014rem;
            height: 2.014rem;
            flex-shrink: 0;

            @media (max-width: 768px) {
                width: 7.734rem;
                height: 7.734rem;
            }
        }

        .faq_svg__minus {
            position: absolute;
            width: 2.014rem;
            height: 2.014rem;
            transition: all .5s ease-out;

            @media (max-width: 768px) {
                width: 7.734rem;
                height: 7.734rem;
            }

            &:last-child {
                transform: rotateZ(90deg);
            }

            &_close {
                transform: rotateZ(0deg) !important;
            }

        }
    }

    .answer {
        height: 0;
        overflow-y: hidden;
        font-weight: 300;
        font-size: 1.25rem;
        line-height: 130%;
        transition: all .5s ease-out;

        @media (max-width: 768px) {
            font-size: 4.8rem;
        }

        &.open {
            padding-bottom: 2.09rem;
            height: auto;

            @media (max-width: 768px) {
                padding-bottom: 8rem;
            }
        }
    }
}
</style>