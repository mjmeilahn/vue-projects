<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>

                <button @click="show = !show" class="btn btn-primary">Show Alerts</button>
                <button @click="appear = !appear" class="btn btn-primary">Toggle Info</button>
                <br><br>

                <select v-model="alertAnimation" class="form-control">
                    <option value="fade">Fade</option>
                    <option valude="slide">Slide</option>
                </select>
                <br><br>

                <!-- ADDING THIRD-PARTY ANIMATION CLASSES -->
                <transition
                enter-active-class="animated bounce"
                leave-active-class="animated shake"
                appear>
                    <div v-if="appear" class="alert alert-info">INFO #1</div>
                </transition>

                <!-- BINDING CLASS VIA DATA PROPERTY -->
                <transition :name="alertAnimation">
                    <div v-show="show" class="alert alert-danger">ALERT #1</div>
                </transition>

                <!-- <transition> "mode" WILL ANIMATE ELEMENTS FIRST WITH ABSOLUTE POSITIONING FOR SMOOTH ANIMATIONS -->
                <transition :name="alertAnimation" mode="out-in">
                    <div v-if="show" class="alert alert-danger" key="alert">ALERT #2</div>
                    <div v-else class="alert alert-info" key="info">INFO #2</div>
                </transition>

                <!-- ADD "TYPE" PARAMETER TO SPECIFY WHEN <transition> ELEMENT SHOULD FINISH IT'S ATTACHMENT TO DOM.

                HERE WE SPECIFY "animation" WHEN IT TAKES ONE SECOND TO FINISH VS. THE CSS "transition" TAKING THREE SECONDS. -->
                <transition name="slide" type="animation">
                    <div v-if="show" class="alert alert-danger">ALERT #3</div>
                </transition>

                <hr>

                <button @click="load = !load" class="btn btn-primary">Load / Remove Element</button>
                <br><br>

                <!-- WHEN IMPLEMENTING JAVASCRIPT ANIMATION OVER CSS - WE ATTACH PARAMETERS TO <transition>. THERE ARE NO PERFORMANCE PENALTIES WITHOUT ":css" BUT IT TELLS VUE THERE ARE NO OTHER CSS CLASSES TO CHECK
                -->
                <transition
                @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter"
                @enter-cancelled="enterCancelled"
                @before-leave="beforeLeave"
                @leave="leave"
                @after-leave="afterLeave"
                @leave-cancelled="leaveCancelled"
                :css="false">
                    <div style="width: 300px; height: 100px; background-color: lightgreen;" v-if="load"></div>
                </transition>
                <hr>

                <select v-model="selectedComponent">
                    <option value="success-alert">Success Alert</option>
                    <option value="danger-alert">Danger Alert</option>
                </select>
                <br><br>

                <!-- DYNAMIC COMPONENT CONTAINER WRAPPED IN <transition> -->
                <transition name="fade" mode="out-in">
                    <component :is="selectedComponent"></component>
                </transition>
                <hr>

                <button @click="addItem" class="btn btn-primary">Add Item</button>
                <br><br>

                <!-- NOTE: ORIGINAL <transition> ELEMENTS ARE NOT RENDERED TO THE DOM - HOWEVER <transition-group> WILL BE REPLACED BY <span> BUT CAN BE OVERRIDEN WITH tag="TAG" -->
                <ul class="list-group">
                    <transition-group name="slide">
                        <li 
                        v-for="(number, i) in numbers"
                        :key="number"
                        @click="removeItem(i)"
                        class="list-group-item" style="cursor: pointer;">{{ number }}</li>
                    </transition-group>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import DangerAlert from './DangerAlert.vue';
    import SuccessAlert from './SuccessAlert.vue';

    export default {
        data() {
            return {
                show: false,
                appear: true,
                alertAnimation: 'fade',
                load: true,
                elWidth: 100,
                selectedComponent: 'success-alert',
                numbers: [1, 2, 3, 4, 5]
            }
        },
        methods: {
            beforeEnter(el) {
                console.log('before enter');
                this.elWidth = 100;
                el.style.width = this.elWidth + 'px';
            },
            enter(el, done) {
                console.log('enter');

                let round = 1;
                const interval = setInterval(() => {
                    el.style.width = (this.elWidth + round * 10) + 'px';
                    round++;

                    if (round > 20) {
                        clearInterval(interval);
                        done();
                    }
                }, 20);
            },
            afterEnter(el) {
                console.log('after enter');
            },
            enterCancelled(el) {
                console.log('enter cancelled');
            },
            beforeLeave(el) {
                console.log('before leave');
                this.elWidth = 300;
                el.style.width = this.elWidth + 'px';
            },
            leave(el, done) {
                console.log('leave');
                let round = 1;
                const interval = setInterval(() => {
                    el.style.width = (this.elWidth - round * 10) + 'px';
                    round++;

                    if (round > 20) {
                        clearInterval(interval);
                        done();
                    }
                }, 20);
            },
            afterLeave(el) {
                console.log('after leave');
            },
            leaveCancelled(el) {
                console.log('leave cancelled');
            },
            addItem() {
                const pos = Math.floor(Math.random() * this.numbers.length);

                this.numbers.splice(pos, 0, this.numbers.length + 1);
            },
            removeItem(i) {
                this.numbers.splice(i, 1);
            }
        },
        components: {
            'danger-alert': DangerAlert,
            'success-alert': SuccessAlert
        }
    }
</script>

<style>
    .fade-enter {
        opacity: 0;
    }

    .fade-enter-active {
        transition: opacity 1s;
    }

    .fade-leave {

    }

    .fade-leave-active {
        transition: opacity 1s;
        opacity: 0;
        position: absolute;
    }

    .slide-enter {
        opacity: 0;
    }

    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
        transition: opacity .5s;
    }

    .slide-leave {

    }

    .slide-leave-active {
        animation: slide-out 1s ease-out forwards;
        opacity: 0;
        position: absolute;
        transition: opacity 3s;
    }

    .slide-move {
        transition: transform 1s;
    }

    @keyframes slide-in {
        from {
            transform: translateY(20px);
        }
        to {
            transform: translateY(0);
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(20px);
        }
    }
</style>
