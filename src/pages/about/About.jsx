import React from 'react'
import './AboutStyle.css'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div>
      <section className="page-title bg-1 dark:before:opacity-50 before:opacity-40 ">
        <div className="container relative">
          <div className="row">
            <div className="col-md-12">
              <div className="block text-center">
                <span className="font-bold text-white">About Us</span>
                <h1 className="mb-4 text-5xl font-light text-gray-200 text-capitalize dark:text-gray-400">Maverick</h1>

              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="section about-2 position-relative">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="pr-3 mb-5 about-item mb-lg-0">
                <span className="h6 text-color">Who we are</span>
                <h2 className="mt-3 mb-4 position-relative content-title">We are Maverick Group No 4</h2>
                <p className="mb-5">Welcome to Maverick, an innovative online platform dedicated to fostering seamless communication between educators and students. We understand the importance of efficient result management, which is why we have created a user-friendly space for teachers to effortlessly upload result sheets, and for students to conveniently access and review their academic progress.</p>

                <Link
                  to="/generate"
                  className="text-black no-underline btn-get-started animate__animated animate__fadeInUp scrollto dark:text-white"
                >    Get Started</Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-item-img">
                <img loading="lazy" src="images/aboutus.jpeg" width="800" height="300" alt="about-image" />
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="pt-0 about-info section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="mb-4 about-info-item mb-lg-0">
                <h3 className="mb-3"><span className="mr-2 text-4xl text-color ">01.</span>Our Mission</h3>
                <p>To provide a progress report for students to access their academic records and track their progress. That enables educational institutions to manage student performance and productive learning environment.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="mb-4 about-info-item mb-lg-0">
                <h3 className="mb-3"><span className="mr-2 text-4xl text-color">02.</span>Vission</h3>
                <p>To empower students with the tools they need to succeed academically and professionally.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="mb-4 about-info-item mb-lg-0">
                <h3 className="mb-3"><span className="mr-2 text-4xl text-color">03.</span>Our Approach</h3>
                <p>Develop a secure web application that allows academic staff to input and access student data easily. Enable real-time access to subject-wise results for both students and academic staff, ensuring transparency and facilitating timely interventions for academic improvement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>





      <section className="">
        <div className="max-w-screen-xl px-4 pt-0 mx-auto text-center lg:py-16 lg:px-6">
          <div className="max-w-screen-sm mx-auto mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">Our team</h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">Introduce the key members behind the development and maintenance of the website, highlighting their expertise and dedication to improving the educational landscape.</p>
          </div>
          <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 ">

            <div className="text-center text-gray-500 dark:text-gray-400">
              <img className="mx-auto mb-4 rounded-full w-36 h-36" src="images/Mohammed Kiyas.jpg" alt="Mohammed Kiyas" />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Mohammed Kiyas</a>
              </h3>

              <ul className="flex justify-center p-0 mt-4 space-x-4">
                <li>
                  <a href="https://www.facebook.com/armkiyas99?mibextid=ZbWKwL" class="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/ARMkiyas" class="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" /></svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/armkiyas" class="text-blue-600 hover:text-gray-900 dark:hover:text-white dark:text-blue-500">

                    <svg class="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M41.4,508.1H-8.5V348.4h49.9 V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7 C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6 c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z "></path> </g></svg>


                  </a>
                </li>

              </ul>
            </div>
            <div class="text-center text-gray-500 dark:text-gray-400">
              <img class="mx-auto mb-4 w-36 h-36 rounded-full" src="images/Amitha Fonseka.jpg" alt="Amitha Fonseka" />
              <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Amitha Fonseka</a>
              </h3>

              <ul class="flex justify-center mt-4 space-x-4 p-0">
                <li>
                  <a href="https://www.facebook.com/amithakalana.fonseka?mibextid=ZbWKwL" class="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/AmithaFonseka" class="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" /></svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/amitha-fonseka-182b2a1a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" class="text-blue-600 hover:text-gray-900 dark:hover:text-white dark:text-blue-500">

                    <svg class="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M41.4,508.1H-8.5V348.4h49.9 V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7 C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6 c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z "></path> </g></svg>


                  </a>
                </li>

              </ul>
            </div>
            <div class="text-center text-gray-500 dark:text-gray-400">
              <img class="mx-auto mb-4 w-36 h-36 rounded-full" src="images/Paramanantham Dokitha.jpg" alt="Paramanantham Dokitha" />
              <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Paramanantham Dokitha</a>
              </h3>

              <ul class="flex justify-center mt-4 space-x-4 p-0">
                <li>
                  <a href="https://www.facebook.com/profile.php?id=100093416447754&mibextid=ZbWKwL" class="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Dokitha" class="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" /></svg>
                  </a>
                </li>
                <li>
                  <a href="www.linkedin.com/in/dokitha-paramanantham-544a63295" class="text-blue-600 hover:text-gray-900 dark:hover:text-white dark:text-blue-500">

                    <svg class="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M41.4,508.1H-8.5V348.4h49.9 V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7 C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6 c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z "></path> </g></svg>


                  </a>
                </li>

              </ul>
            </div>
            <div class="text-center text-gray-500 dark:text-gray-400">
              <img class="mx-auto mb-4 w-36 h-36 rounded-full" src="images/LasaniSubodhani.jpg" alt="Lasani Subodhani" />
              <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Lasani Subodhani</a>
              </h3>

              <ul class="flex justify-center mt-4 space-x-4 p-0">
                <li>
                  <a href="https://www.facebook.com/profile.php?id=100093857047092&mibextid=ZbWKwL" class="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                  </a>
                </li>
                <li>
                  <a href="#" class="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" /></svg>
                  </a>
                </li>
                <li>
                  <a href="#" class="text-blue-600 hover:text-gray-900 dark:hover:text-white dark:text-blue-500">

                    <svg class="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M41.4,508.1H-8.5V348.4h49.9 V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7 C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6 c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z "></path> </g></svg>


                  </a>
                </li>

              </ul>
            </div>
            <div class="text-center text-gray-500 dark:text-gray-400">
              <img class="mx-auto mb-4 w-36 h-36 rounded-full" src="images/Dilki Hasani.jpg" alt="Dilki Hasani" />
              <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Dilki Hasani</a>
              </h3>

              <ul class="flex justify-center mt-4 space-x-4 p-0">
                <li>
                  <a href="https://www.facebook.com/profile.php?id=61551448825586&mibextid=ZbWKwL" class="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                  </a>
                </li>
                <li>
                  <a href="#" class="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" /></svg>
                  </a>
                </li>
                <li>
                  <a href="#" class="text-blue-600 hover:text-gray-900 dark:hover:text-white dark:text-blue-500">

                    <svg class="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M41.4,508.1H-8.5V348.4h49.9 V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7 C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6 c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z "></path> </g></svg>


                  </a>
                </li>

              </ul>
            </div>
            <div class="text-center text-gray-500 dark:text-gray-400">
              <img class="mx-auto mb-4 w-36 h-36 rounded-full" src="images/Erick Sandaruwan.jpg" alt="Erick Sandaruwan" />
              <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Erick Sandaruwan</a>
              </h3>

              <ul class="flex justify-center mt-4 space-x-4 p-0">
                <li>
                  <a href="https://www.facebook.com/ericksadaruwan.kothalawala.5?mibextid=ZbWKwL" class="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                  </a>
                </li>
                <li>
                  <a href="#" class="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" /></svg>
                  </a>
                </li>
                <li>
                  <a href="#" class="text-blue-600 hover:text-gray-900 dark:hover:text-white dark:text-blue-500">

                    <svg class="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M41.4,508.1H-8.5V348.4h49.9 V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7 C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6 c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z "></path> </g></svg>


                  </a>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </section>








    </div>
  )
}
