<template>
<div class="ms-menu-item"
    v-if="render !== false"
    :class="{open: showChild, current: current}"
    >
    <div class="ms-menu-title-container">
        <router-link
            v-if="nav.link"
            class="ms-menu-sub"
            :to="{ path: nav.link, activeClass: 'active'}"
            :class="{ active: nav.active }">
            <span class="ms-menu-icon"
                :class="[nav.icon]"
                v-if="nav.icon"></span>
            <span class="ms-menu-sub-title">{{nav.title}}</span>
            <span class="label text" v-if="nav.text">{{nav.text}}</span>
            <!-- <span class="label unread-num" :class="{small: nav.label === '-1'}" v-if="nav.label">{{nav.label|unread}}</span> -->
        </router-link>
        <div class="ms-menu-sub" v-else-if="nav.click" @click="$emit(nav.click)">
            <span class="ms-menu-icon" :class="[nav.icon]" v-if="nav.icon"></span>
            <span class="ms-menu-sub-title" v-if="nav.title">{{nav.title}}</span>
            <span class="label text" v-if="nav.text">{{nav.text}}</span>
            <!-- <span class="label unread-num" v-if="nav.label" :class="{small: nav.label === '-1'}">{{nav.label|unread}}</span> -->
            <span class="ms-menu-title-arrow icon-arrow-left" v-if="nav.subMenu"></span>
        </div>
        <div class="ms-menu-sub" v-else @click="toggleChild">
            <span class="ms-menu-icon" :class="[nav.icon]" v-if="nav.icon"></span>
            <span class="ms-menu-sub-title" v-if="nav.title">{{nav.title}}</span>
            <span class="label text" v-if="nav.text">{{nav.text}}</span>
            <!-- <span class="label unread-num" v-if="nav.label" :class="{small: nav.label === '-1'}">{{nav.label|unread}}</span> -->
            <span class="ms-menu-title-arrow icon-arrow-left"></span>
        </div>
    </div>
    <ul v-if="nav.subItem" v-show="showChild">
        <li v-for="(subMenuItem, idx) in nav.subItem" :key="idx">
            <router-link v-if="subMenuItem.link"
                v-show="subMenuItem.render !== false"
                :to="{ path: '/' + subMenuItem.link, activeClass: 'active'}"
                class="ms-sub-menu-item">
                <span class="ms-sub-menu-title">{{subMenuItem.title}}</span>
                <span class="label text" v-if="subMenuItem.text">{{subMenuItem.text}}</span>
                <!-- <span class="label unread-num" v-if="subMenuItem.label">{{subMenuItem.label|unread}}</span> -->
            </router-link>
            <a class="ms-sub-menu-item" v-else @click="$emit(subMenuItem.click)" v-show="subMenuItem.render !== false">
                <span v-if="subMenuItem.click" class="ms-sub-menu-title">{{subMenuItem.title}}</span>
                <span class="label text" v-if="subMenuItem.text">{{subMenuItem.text}}</span>
                <!-- <span class="label unread-num" v-if="subMenuItem.label">{{subMenuItem.label|unread}}</span> -->
            </a>
            <slot></slot>
        </li>
    </ul>
</div>
</template>
<script>
export default {
    name: 'side-menu-item',

    props: {
        nav: {
            type: Object,
            required: true
        },
        current: Boolean
    },

    data () {
        return {
            showChild: false,
            render: true,
            updateNav: this.nav || {}
        }
    },

    watch: {
        'updateNav.showChild' (newVal) {
            this.showChild = newVal
        },
        nav (newVal) {
            this.updateNav = newVal || {}
            this.render = (typeof (this.updateNav.render) === 'undefined') || this.updateNav.render
        }
    },

    created () {
        this.showChild = !!this.nav.showChild
        this.render = (typeof (this.nav.render) === 'undefined') || this.nav.render
    },

    methods: {
        toggleChild () {
            this.showChild = !this.showChild
        }
    }
}
</script>
<style lang="less" scoped>
.ms-menu-container {
    min-height: 52px;
}
.ms-menu-item {
    position: relative;
    cursor: pointer;
    ul {
        height: auto;
        transition: height 0.2s ease;
    }
    .label.text {
        display: inline-block;
        box-sizing: content-box;
        height: 20px;
        line-height: 20px;
        text-align: center;
        vertical-align: middle;
        padding: 0 13px;
        margin: 0 10px;
        border-radius: 2px;
        font-size: 12px;
        color: #fff;
        background-color: #EC4363;
        transform: scale(0.7);
    }
}
.ms-menu-sub {
    display: flex;
    font-size: 16px;
    padding: 16px 20px;
    line-height: 20px;
    align-items: center;
    -webkit-box-align: center;
    color: #A5B1C1;
    &:hover {
        color: #A5B1C1;
        background-color: rgba(34, 46, 62, 1);
    }
    .router-link-active {
        color: #fff;
        // background-color: rgba(34, 46, 62, 1);
    }
    .unread-num.small {
        width: 12px;
        height: 12px;
        padding: 0;
        font-size: 0;
        border-radius: 50%;
    }
}
.ms-menu-icon {
    font-size: 20px;
}
.ms-menu-sub-title {
    padding-left: 12px;
}

.ms-sub-menu-item {
    display: flex;
    font-size: 14px;
    padding: 16px 20px;
    line-height: 20px;
    align-items: center;
    -webkit-box-align: center;
    color: #A5B1C1;
    &:hover {
        color: #fff;
    }
    &.router-link-active {
        color: #fff;
        // background-color: rgba(34, 46, 62, 1);
    }
}
.ms-sub-menu-title {
    padding-left: 32px;
}
.ms-menu-title-arrow {
    position: absolute;
    font-size: 16px;
    right: 20px;
    top: 1.25rem;
    transform: rotate(0);
    transition: transform 0.2s ease;
}
.ms-menu-title-container {
    .router-link-active {
        color: #fff;
    }
}
.ms-menu-item.open .ms-menu-title-arrow {
    transform: rotate(-90deg);
}
.ms-menu-item.open ul {
    height: auto;
}
.ms-menu-group-title {
    color: #b9b9b9;
    font-size: .8rem;
    padding-left: 1.5rem;
}
@keyframes fadeInDown {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-50%, -1rem, 0);
    transform: translate3d(-50%, -1rem, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(-50%, 0, 0);
    transform: translate3d(-50%, 0, 0);
  }
}
@keyframes fadeOutUp {
  from {
    opacity: 1;
    -webkit-transform: translate3d(-50%, 0, 0);
    transform: translate3d(-50%, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-50%, -1rem, 0);
    transform: translate3d(-50%, -1rem, 0);
  }
}
.fade-in-down-transition {
  animation-duration: .3s;
  animation-fill-mode: both;
}
.fade-in-down-enter {
    animation-name: fadeInDown;
}
.fade-in-down-leave {
    animation-name: fadeOutUp;
}
.linkActive {
    color: #A5B1C1;
    background-color: rgba(34, 46, 62, 1);
    border-radius: 0;
}
.disabledLinkActive {
  cursor: not-allowed;
}
</style>
