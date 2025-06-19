'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useMutation } from '@tanstack/react-query';
import { subscribeUser } from '@/api/services';
// import { SubscribePayload, SubscribeResponse } from '@/api/services';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const { mutate, isPending, isSuccess, isError, error, data } = useMutation({
    mutationFn: subscribeUser,
    onSuccess: () => {
      setSubmitted(true);
    },
  });
  console.log('isSuccess', isSuccess, 'isError', isError, 'data', data, 'error', error);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && !isPending) {
      mutate({ email });
    }
  };

  return (
    <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 rounded-2xl bg-white/10 backdrop-blur-sm shadow-xl border border-white/20 px-6 py-10 md:py-12 md:px-12 lg:py-16 lg:px-16 overflow-hidden">
          <div className="lg:grid lg:grid-cols-5 lg:gap-8 items-center">
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
                Stay Updated with the Latest AI Tools
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-7 text-white/90">
                Subscribe to our newsletter to receive updates on new AI tools, features, and industry insights delivered directly to your inbox.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-0 sm:flex sm:flex-col">
                <div className="w-full">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-lg border-white/30 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent placeholder:text-white/60 text-base text-white border bg-white/10 backdrop-blur-sm focus:ring-offset-2 focus:ring-offset-primary-dark transition duration-200 ease-in-out"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isPending}
                  className="mt-3 w-full sm:w-auto flex items-center justify-center rounded-lg border border-transparent bg-accent hover:bg-accent-dark px-6 py-4 text-base font-medium text-white shadow-sm transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-dark"
                >
                  {isPending ? 'Subscribing...' : 'Subscribe Now'}
                </button>
              </form>

              {isSuccess && (
                <p className="mt-4 text-sm text-green-300">{data.message}</p>
              )}

              {isError && (
                <p className="mt-4 text-sm text-red-300">
                  {(error as any)?.response?.data?.detail || (error as any)?.response?.data?.email[0] || 'Failed to subscribe. Please try again.'}
                </p>
              )}

              <p className="mt-4 text-sm text-white/80">
                We care about your data and privacy. Read our{' '}
                <Link
                  href="/privacy"
                  className="font-medium text-white underline hover:text-accent transition duration-200 ease-in-out"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
