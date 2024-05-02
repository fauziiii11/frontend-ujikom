<template>
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;1,600&display=swap"
        rel="stylesheet" />
    <div class="flex min-h-screen w-screen w-full items-center justify-center text-gray-600 bg-gray-50">
        <div class="relative mt-8">

            <div class="hidden sm:block h-56 w-56 text-green-300 absolute a-z-10 -left-20 -top-20">
                <svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'>
                    <defs>
                        <pattern id='a' patternUnits='userSpaceOnUse' width='40' height='40'
                            patternTransform='scale(0.6) rotate(0)'>
                            <rect x='0' y='0' width='100%' height='100%' fill='none' />
                            <path d='M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5' stroke-width='1'
                                stroke='none' fill='currentColor' />
                        </pattern>
                    </defs>
                    <rect width='800%' height='800%' transform='translate(0,0)' fill='url(#a)' />
                </svg>
            </div>
            <div class="hidden sm:block h-28 w-28 text-green-300 absolute a-z-10 -right-20 -bottom-20">
                <svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'>
                    <defs>
                        <pattern id='b' patternUnits='userSpaceOnUse' width='40' height='40'
                            patternTransform='scale(0.5) rotate(0)'>
                            <rect x='0' y='0' width='100%' height='100%' fill='none' />
                            <path d='M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5' stroke-width='1'
                                stroke='none' fill='currentColor' />
                        </pattern>
                    </defs>
                    <rect width='800%' height='800%' transform='translate(0,0)' fill='url(#b)' />
                </svg>
            </div>
            <!-- Register -->
            <div class="relative flex flex-col sm:w-[30rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
                <div class="flex-auto p-6">
                    <!-- Logo -->
                    <div class="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
                        <a href="#"
                            class="flex cursor-pointer items-center gap-2 text-green-500 no-underline hover:text-green-500">
                            <span class="flex-shrink-0 text-3xl font-black lowercase tracking-tight opacity-100">LOGIN
                                FamilyFin</span>
                        </a>
                    </div>
                    <!-- /Logo -->
                    <h4 class="mb-2 font-medium text-gray-700 xl:text-xl">Selamat Datang </h4>
                    <p class="mb-6 text-gray-500">Login untuk mengakses website ini.</p>

                    <form id="" class="mb-4" @submit.prevent="performLogin">
                        <div class="mb-4">
                            <label for="email"
                                class="mb-2 inline-block text-xs font-medium uppercase text-gray-700">Masukan Email
                                Anda</label>
                            <input type="email"
                                class="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-green-500 focus:bg-white focus:text-gray-600 focus:shadow"
                                id="email" v-model="email" placeholder="Enter your email" autofocus="" required />
                        </div>
                        <div class="mb-4">
                            <div class="flex justify-between">
                                <label class="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
                                    for="password">Password</label>
                                <a href="auth-forgot-password-basic.html"
                                    class="cursor-pointer text-green-500 no-underline hover:text-green-500">

                                </a>
                            </div>
                            <div class="relative flex w-full flex-wrap items-stretch">
                                <input type="password" id="password"
                                    class="relative block flex-auto cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-green-500 focus:bg-white focus:text-gray-600 focus:shadow"
                                    v-model="password" placeholder="············" />
                            </div>
                        </div>
                        <div class="mb-4">
                            <div class="block">
                                <input
                                    class="mt-1 mr-2 h-5 w-5 appearance-none rounded border border-gray-300 bg-contain bg-no-repeat align-top text-black shadow checked:bg-green-500 focus:border-green-500 focus:shadow"
                                    type="checkbox" id="remember-me"
                                    style="background-image: url(&quot;data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 10l3 3l6-6'/%3e%3c/svg%3e&quot;)"
                                    checked />
                                <label class="inline-block" for="remember-me"> Remember Me </label>
                            </div>
                        </div>
                        <div class="mb-4">
                            <button
                                class="grid w-full cursor-pointer select-none rounded-md border border-green-500 bg-green-500 py-2 px-5 text-center align-middle text-sm text-white shadow hover:border-green-600 hover:bg-green-600 hover:text-white focus:border-green-600 focus:bg-green-600 focus:text-white focus:shadow-none"
                                type="submit">Login</button>
                        </div>
                    </form>

                    <p class="mb-4 text-center">
                        belum punya akun FamilyFin?
                        <a href="/register" class="cursor-pointer text-green-500 no-underline hover:text-green-500">
                            Register disini</a>
                    </p>
                </div>
            </div>
            <!-- /Register -->
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    data() {
        return {
            email: '',
            password: '',
        };
    },
    computed: {
        ...mapGetters('auth', ['loginError', 'isAuthenticated','userRole']),
    },
    methods: {
        ...mapActions('auth', ['login']),
        async performLogin() {
            const credentials = {
                email: this.email,
                password: this.password,
            };

            try {
                const success = await this.login(credentials);

                if (success) {
                    // Cetak peran pengguna ke konsol
                    console.log('User role:', this.userRole);

                    if (this.userRole === 'admin') {
                        this.$router.push('/admin');
                    } else if (this.userRole === 'member') {
                        this.$router.push('/home');
                    } else {
                        // Handle other roles
                        alert('Invalid user role');
                    }
                } else {
                    alert('Login Failed');
                }
            } catch (error) {
                console.error('Error during login:', error);
                alert('An error occurred during login');
            }
        },
    },
};
</script>