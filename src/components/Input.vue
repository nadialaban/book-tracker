<script setup>
import IconShowHide from '@/components/icons/IconShowHide.vue'
import {computed, reactive} from "vue";
import EventBus from "@/event-bus.js";

const emit = defineEmits(['update:value'])

let states = reactive({
    isHidden: true
})

const props = defineProps({
    error: {
        type: Array,
        required: false
    },
    value: {
        type: String,
        default: ''
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: 'text'
    },
    placeholder: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    },
    width: {
        type: String,
        default: '300px'
    }
})

const updateValue = (e) => {
    emit('update:value', e.target.value)
}

const fieldType = computed(() => {
    if (props.type === 'password')
        return states.isHidden ? 'password' : 'text'
    return props.type
})


const passwordShowHide = () => {
    states.isHidden = !states.isHidden
}
</script>

<template>
    <div class="form-input" :style="{width: width}">
        <label :for="name" class="input-label">{{ label }}</label>


        <div class="input-group">
            <input class="input-text" :type="fieldType"
                   :label="label" :name="name" :id="name"
                   :placeholder="placeholder" :value="value"
                   @input="updateValue" @keyup.enter="EventBus.emit('enter-input', name)">

            <button v-if="type === 'password'" class="input-icon" @click="passwordShowHide">
                <icon-show-hide :hide="states.isHidden"/>
            </button>
        </div>


        <TransitionGroup>
            <div
                class="form-error"
                v-for="element of error"
                :key="element.$uid">
                <div class="form-error__message">{{ element.$message }}</div>
            </div>
        </TransitionGroup>
    </div>

</template>

<style lang="scss" scoped>
.form {
    &-input {
        margin-bottom: 10px;
        position: relative;
    }

    &-error {
        background: var(--error);
        margin-top: 4px;
        border-radius: 7px;
        font-size: 13px;
        color: #fff;
        padding: 5px;
    }
}

.input {
    &-text {
        border: 1px solid var(--primary-color);
        padding: 0 10px;
        height: 40px;
        border-radius: 7px;
        font-size: 15px;
        width: 100%;
        position: relative;
        z-index: 1;
    }

    &-label {
        font-weight: 500;
        display: block;
        z-index: 1;
        font-size: 14px;
        margin-left: 3px;
        color: var(--primary-color);
    }

    &-group {
    }

    &-icon {
        height: 40px;
        width: 40px;
        border-radius: 7px;
        border-color: transparent;
        background-color: transparent;
        padding: 5px;
        position: absolute;
        right: 0;
        z-index: 1;
    }
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

input[type='password']:not(:placeholder-shown) {
    font-family: Verdana,serif;
    letter-spacing: 0.125em;
}
</style>