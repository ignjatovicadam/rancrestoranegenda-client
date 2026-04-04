<script setup>
    import { food } from "./menu";
    
    const scrollToSection = (index) => {
    const el = document.getElementById("category-" + index);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };
</script>

<template>
    <div class="menu-page-wrapper">
        <section id="menu" class="template-hero padding-block-900">
            <div class="container">
                <div class="flow">
                    <h2 class="fs-secondary-heading fw-bold">Ukusi koji ostavljaju trag</h2>
                    <p class="fw-regular">Uživajte u pažljivo pripremljenim jelima od svežih namirnica, tradicionalnim specijalitetima i gurmanskim poslasticama koje osvajaju na prvi zalogaj.</p>
                </div>
    
                <ul role="list">
                    <li v-for="(section, index) in food" :key="index">
                        <a href="#" @click.prevent="scrollToSection(index)">{{ section.category }}</a>
                        <span v-if="index !== food.length - 1">/</span>
                    </li>
                </ul>
            </div>
        </section>
        <section
            v-for="(section, index) in food"
            :id="'category-' + index"
            :key="index"
            class="menu-section padding-block-700"
            >
            <div class="container">
                <h3 class="fs-tertiary-heading fw-bold">{{ section.category }}</h3>
    
                <div class="menu-columns">
                <article
                    v-for="(item, i) in section.items"
                    :key="i"
                    class="menu-list-item"
                >
                    <div class="menu-list-item-text">
                        <span class="fw-regular">{{ item.name }}</span>
                        <span class="fw-regular menu-list-item-description">{{ item.description }}</span>
                    </div>
                    <div class="menu-list-item-price">
                    <span class="fw-bold">{{ item.price }}</span>
                    </div>
                </article>
                </div>
            </div>
        </section>
    </div>
</template>

<style src="./menu-view.css" scoped />