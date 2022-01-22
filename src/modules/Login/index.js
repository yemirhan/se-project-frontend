import { Grid, Paper } from '@mantine/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';

export const Login = () => {
    return <div className='container mx-auto py-2' style={{ height: `100vh`, maxHeight: `100vh` }}>
        <div className='col-span-4 flex flex-col items-center justify-center h-48'>
            <h2 className='text-xl font-semibold'>Welcome</h2>
            <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque veniam asperiores recusandae, quod, impedit vel distinctio laboriosam tempore amet aliquam facilis nam minima consectetur excepturi iusto laudantium nemo exercitationem? Earum.</p>
        </div>
        <div className='w-full grid grid-cols-4 h-[70vh] gap-2'>

            <div className='    col-span-3'>
                <div className='bg-gray-500 rounded-lg shadow-md w-full h-full'></div>
            </div>
            <div className='w-full h-full flex flex-col justify-center'>
                <div>
                    <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Sign in to your account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Or
                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                            start your 14-day free trial
                        </a>
                    </p>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" value="true"></input>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label for="email-address" className="sr-only">Email address</label>
                            <input id="email-address" name="email" type="email" autocomplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address"></input>
                        </div>
                        <div>
                            <label for="password" className="sr-only">Password</label>
                            <input id="password" name="password" type="password" autocomplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"></input>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"></input>
                            <label for="remember-me" className="ml-2 block text-sm text-gray-900">
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Forgot your password?
                            </a>
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">

                                <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                                </svg>
                            </span>
                            Sign in
                        </button>
                        <div className="text-sm text-center mt-2">
                            Or {" "}
                            <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Create a new account
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
};
