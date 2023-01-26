<script>
  import heroBg from '@/assets/bg-hero.svg'
  import heroImg from '@/assets/hero-img.svg'
  import accIcon from '@/assets/accIcon.svg'
  import entIcon from '@/assets/entIcon.svg'
  import schIcon from '@/assets/schIcon.svg'
  import proIcon from '@/assets/proIcon.svg'
  import ecomIcon from '@/assets/ecomIcon.svg'
  import proImg from '@/assets/proImg.svg'
  import accImg from '@/assets/accImg.svg'
  import trainingsImg from '@/assets/trainingsImg.svg'
  import supportImg from '@/assets/supportImg.svg'
  import ceremoniesImg from '@/assets/ceremoniesImg.svg'
  import leisuresImg from '@/assets/leisuresImg.svg'
  import waves1 from '@/assets/waves1.svg'
  import ecomImg from '@/assets/ecomImg.svg'
  import magazinesImg from '@/assets/magazinesImg.svg'

  export default {
    data(){
      return{
        heroBg,
        heroImg,
        proImg,
        accImg,
        trainingsImg,
        supportImg,
        ceremoniesImg,
        leisuresImg,
        waves1,
        ecomImg,
        magazinesImg,
        aboutItems: [
          {
            icon: proIcon,
            text: "Professionnels",
            url: "pros"
          },
          {
            icon: accIcon,
            text: "Hébergements",
            url: "acc"
          },
          {
            icon: schIcon,
            text: "Éducation",
            url: "education"
          },
          {
            icon: entIcon,
            text: "Entertainments",
            url: "ent"
          },
          {
            icon: ecomIcon,
            text: "E-Commerce",
            url: "sellings"
          }
        ],
        actEducation: "support",
        actEnt: "ceremonies",
        actSelling: "ecommerce"
      }
    }
  }
</script>

<template>
  <div class="landing-page">
    <div class="home-hero" id="hero">
      <img :src="heroBg" alt="hero-bg" class="home-hero--bg" />
      <div class="home-hero--container">
        <div class="home-nav">
          <h1 class="logo"><span>T</span>HOMAS<span>T</span>A</h1>
          <nav>
            <a href="#about"><span></span> À Propos</a>
            <a href="#services"><span></span> Services</a>
            <a href="#contact"><span></span> Contact</a>
          </nav>
        </div>
        <div class="home-hero--content">
          <div>
            <h3>La plateforme des jeunes, par les jeunes et pour les jeunes</h3>
            <div class="white-line"></div>
            <div class="hero-buttons">
              <a href="#contact" class="button">Contactez nous</a>
              <a href="#" class="button">Connexion</a>
            </div>
          </div>
          <img :src="heroImg" alt="hero-img" class="hero-img" />
        </div>
      </div>
    </div>
    <section class="about" id="about">
      <h1>QUI SOMMES NOUS ?</h1>
      <p class="text2">Nous sommes un réseaux de professionnels et d'experts dans les domaines techniques et informatiques, de l'éducation, de l'immobilier, de l'évennementiel et de l'e-commerce. Nous offrons nos services dans divers domaines.</p>
      <div class="about--items">
        <a
          :href="'#'+url"
          v-for="({ icon, text, url }, index) in aboutItems"
          :key="'about-item--'+index"
          class="about-item"
        >
          <img :src="icon" :alt="text" />
          <h3>{{ text }}</h3>
        </a>
      </div>
    </section>
    <section id="services" class="services">
      <h1>NOS SERVICES</h1> 
      <section class="services--item services--pros" id="pros">
        <img :src="proImg" alt="pro-img" />
        <div class="service--content services--pros--content">
          <div class="blue-line-rev"></div>
          <h2>Annuaires Des Professionnels</h2>
          <p class="text1">Vous êtes à la recherche d'un professionnel? Thomsta.com vous permet de trouver des professionnels dans plusieurs pays.</p>
          <p class="text2">Thomasta.com vous propose une liste de professionnels selon vos critères pour vous permettre de gagner en temps et en argent.</p>
          <a href="#" class="section-link">Voir les profils</a>
        </div>
      </section>
      <section class="services--item services--item__rev services--acc" id="acc">
        <div class="service--content services--acc--content">
          <div class="blue-line"></div>
          <h2>Hébergement</h2>
          <p class="text1">HÔTELS - MOTELS - AUBERGES, trouvez tout ce dont vous avez besoin en quelques cliques</p>
          <p class="text2">Thomasta.com vous propose une liste d'etablissement d'hebergement selon vos critères pour vous permettre de gagner en temps et en argent.</p>
          <a href="#" class="section-link">Consulter les offres</a>
        </div>
        <img :src="accImg" alt="pro-img" />
      </section>
      <section class="services--item services--education" id="education">
        <img v-if="actEducation==='training'" :src="trainingsImg" alt="education-img" />
        <img v-else :src="supportImg" alt="education-img" />
        <div class="service--content services--education--content">
          <div class="blue-line-rev"></div>
          <h2>ÉDUCATION</h2>
          <div class="service--switcher">
            <span 
              class="button" 
              :class="{ activeButton: actEducation === 'support' }"
              @click="actEducation = 'support'"
            >
              Soutient Scholaire
            </span>
            <span 
              class="button" 
              :class="{ activeButton: actEducation === 'training' }"
              @click="actEducation = 'training'"
            >
              Formations
            </span>
          </div>
          <p v-if="actEducation==='training'" class="text1">Etes-vous à la recherche d’une Centre de formation professionnelle en informatique, au Cameroun, Gabon ?</p>
          <p v-else class="text1">Combien de temps encore allez-vous avoir la mauvaise note en maths, physique, chimie, anglais, français, ... ?</p>
          <p v-if="actEducation==='training'" class="text2">Thomasta.com vous propose des formations adaptées aux besoins actuels du marché de l’emploi.</p>
          <p v-else class="text2">Thomasta.com met à votre disposition des Cours et Exercices pour apprendre, réviser et s'évaluer de la sixième en terminale.</p>
          <a v-if="actEducation==='training'" href="#" class="section-link">Visiter les parcours</a>
          <a v-else href="#" class="section-link">Parcourir les leçons</a>
        </div>
      </section>
      <section class="contact-cta">
        <div>
          <div class="white-line"></div>
          <p>OBTENEZ TOUS LES RENSEIGNEMENTS DONT VOUS AVEZ BESOIN</p>
        </div>
        <a href="#contact" class="section-link">CONTACTEZ NOUS</a>
      </section>
      <section class="services--item services--ent" id="ent">
        <img v-if="actEnt==='ceremonies'" :src="ceremoniesImg" alt="ceremonies-img" />
        <img v-else :src="leisuresImg" alt="leisures-img" />
        <div class="service--content services--ent--content">
          <div class="blue-line-rev"></div>
          <h2>CÉRÉMONIES ET LOISIRS</h2>
          <div class="service--switcher">
            <span 
              class="button" 
              :class="{ activeButton: actEnt === 'leisures' }"
              @click="actEnt = 'leisures'"
            >
              Lieux de loisir
            </span>
            <span 
              class="button" 
              :class="{ activeButton: actEnt === 'ceremonies' }"
              @click="actEnt = 'ceremonies'"
            >
              Salles de cérémonies
            </span>
          </div>
          <p v-if="actEnt==='ceremonies'" class="text1">Etes-vous à la recherche d'une salle de ceremonie pour organiser vos evenements? </p>
          <p v-else class="text1">Etes-vous à la recherche d'un lieu de detente ou de distraction? Grace à Thomsta.com ne cherchez plus longtemps !</p>
          <p v-if="actEnt==='ceremonies'" class="text2">Thomasta.com vous propose une large gamme de salle de ceremonie aussi variées les unes des autres tant au niveau stylistique que des standards.</p>
          <p v-else class="text2">Thomasta.com vous propose plusieurs lieux de loisirs, ceci en fonction de vos desirs.</p>
          <a href="#" class="section-link">Plus d'informations</a>
        </div>
      </section>
      <div class="waves-wrapper">
        <img :src="waves1" alt="wave" class="back-waves" />
      </div>
      <section class="services--item services--item__rev services--selling" id="sellings">
        <div class="service--content services--acc--content">
          <div class="white-line"></div>
          <h2>E-Commerce & Magazines</h2>
          <div class="service--switcher">
            <span 
              class="button" 
              :class="{ activeButton: actSelling === 'magazines' }"
              @click="actSelling = 'magazines'"
            >
              Magazines
            </span>
            <span 
              class="button" 
              :class="{ activeButton: actSelling === 'ecommerce' }"
              @click="actSelling = 'ecommerce'"
            >
              Boutique
            </span>
          </div>
          <p v-if="actSelling === 'ecommerce'" class="text1">Avez déjà approuvé des difficultés à trouver des clients, ou à LE produit donc vous avez besoin ?</p>
          <p v-else class="text1">Trouver de l'informations fiable, et de la lecture intéressante devient de plus en plus rare ?</p>
          <p v-if="actSelling === 'ecommerce'" class="text2">Sur Thomasta.com achetez et vendez vos produits sur internet au Cameroun, Gabon et dans le monde.</p>
          <p v-else class="text2">thomasta.com oeuvre dans la mise en disposition pour tous des informatinos fiables à traves de magazines toujours plus intéressants.</p>
          <a href="#" class="section-link">Consulter les offres</a>
        </div>
        <img v-if="actSelling==='ecommerce'" :src="ecomImg" alt="ecom-img" />
        <img v-else :src="magazinesImg" alt="magazines-img" />
      </section>
    </section>
    <div class="contact" id="contact">
      <div class="contact--text">
        <h1>Contactez nous</h1>
        <p class="text2">Envoyez-nous un message et nous vous aiderons presque immédiatement !</p>
      </div>
      <form class="contact--form">
        <input type="text" placeholder="Votre Nom">
        <input type="text" placeholder="Numéro téléphone ou Adresse e-mail">
        <textarea name="" id="" cols="30" rows="10" placeholder="Votre message"></textarea>
        <input class="submit-button" type="submit" value="Envoyer"/>
      </form>
    </div>
    <a href="#hero" class="footer">
      <h1>THOMASTA</h1>
      <p>COPYRIGHT © 2023</p>
    </a>
  </div>
</template>

<style src="./LandingPage.css"></style>