'use client';

import { toast } from '@/components/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import { useTranslate } from '@/hooks/common-hooks';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export function SignUpForm() {
  const { t } = useTranslate('login');

  const FormSchema = z.object({
    email: z.string().email({
      message: t('emailPlaceholder'),
    }),
    nickname: z.string({ required_error: t('nicknamePlaceholder') }),
    password: z.string({ required_error: t('passwordPlaceholder') }),
    agree: z.boolean({ required_error: t('passwordPlaceholder') }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log('🚀 ~ onSubmit ~ data:', data);
    toast({
      title: 'Account created successfully!',
      description: (
        <div className="text-sm text-green-700">
          Welcome to RAGFlow Legal AI. Please verify your email to continue.
        </div>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-700 font-medium">
                {t('emailLabel')}
              </FormLabel>
              <FormControl>
                <Input
                  placeholder={t('emailPlaceholder')}
                  {...field}
                  className="h-12 border-slate-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="nickname"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-700 font-medium">
                {t('nicknameLabel')}
              </FormLabel>
              <FormControl>
                <Input
                  placeholder={t('nicknamePlaceholder')}
                  {...field}
                  className="h-12 border-slate-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-700 font-medium">
                {t('passwordLabel')}
              </FormLabel>
              <FormControl>
                <Input
                  type={'password'}
                  placeholder={t('passwordPlaceholder')}
                  {...field}
                  className="h-12 border-slate-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="agree"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4 bg-slate-50 border border-slate-200">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="border-slate-400 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="text-sm text-slate-700 leading-relaxed">
                  I understand and agree to the{' '}
                  <span className="text-blue-600 font-medium">
                    Terms of Service
                  </span>{' '}
                  and{' '}
                  <span className="text-blue-600 font-medium">
                    Privacy Policy
                  </span>
                  . I acknowledge that this platform will process legal
                  documents in accordance with applicable data protection laws.
                </FormLabel>
              </div>
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          {t('signUp')}
        </Button>
      </form>
    </Form>
  );
}

export function SignInForm() {
  const { t } = useTranslate('login');

  const FormSchema = z.object({
    email: z.string().email({
      message: t('emailPlaceholder'),
    }),
    password: z.string({ required_error: t('passwordPlaceholder') }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log('🚀 ~ onSubmit ~ data:', data);
    toast({
      title: 'Welcome back!',
      description: (
        <div className="text-sm text-green-700">
          Successfully signed in to RAGFlow Legal AI.
        </div>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-700 font-medium">
                {t('emailLabel')}
              </FormLabel>
              <FormControl>
                <Input
                  placeholder={t('emailPlaceholder')}
                  {...field}
                  className="h-12 border-slate-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-700 font-medium">
                {t('passwordLabel')}
              </FormLabel>
              <FormControl>
                <Input
                  type={'password'}
                  placeholder={t('passwordPlaceholder')}
                  {...field}
                  className="h-12 border-slate-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              className="border-slate-400 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
            />
            <label
              htmlFor="terms"
              className="text-sm font-medium text-slate-700 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {t('rememberMe')}
            </label>
          </div>
          <Button
            variant="link"
            className="text-blue-600 hover:text-blue-800 text-sm p-0 h-auto font-medium"
          >
            Forgot password?
          </Button>
        </div>
        <Button
          type="submit"
          className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          {t('login')}
        </Button>
      </form>
    </Form>
  );
}

export function VerifyEmailForm() {
  const FormSchema = z.object({
    pin: z.string().min(6, {
      message: 'Your verification code must be 6 characters.',
    }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: '',
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log('🚀 ~ onSubmit ~ data:', data);
    toast({
      title: 'Email verified successfully!',
      description: (
        <div className="text-sm text-green-700">
          Your account has been verified. You can now access RAGFlow Legal AI.
        </div>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="pin"
          render={({ field }) => (
            <FormItem className="text-center">
              <FormLabel className="text-slate-700 font-medium text-base">
                Enter Verification Code
              </FormLabel>
              <FormControl>
                <div className="flex justify-center">
                  <InputOTP maxLength={6} {...field} className="gap-3">
                    <InputOTPGroup className="gap-3">
                      <InputOTPSlot
                        index={0}
                        className="w-12 h-12 text-lg font-semibold border-slate-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                      />
                      <InputOTPSlot
                        index={1}
                        className="w-12 h-12 text-lg font-semibold border-slate-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                      />
                      <InputOTPSlot
                        index={2}
                        className="w-12 h-12 text-lg font-semibold border-slate-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                      />
                      <InputOTPSlot
                        index={3}
                        className="w-12 h-12 text-lg font-semibold border-slate-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                      />
                      <InputOTPSlot
                        index={4}
                        className="w-12 h-12 text-lg font-semibold border-slate-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                      />
                      <InputOTPSlot
                        index={5}
                        className="w-12 h-12 text-lg font-semibold border-slate-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                      />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
              </FormControl>
              <FormMessage />
              <p className="text-sm text-slate-600 mt-2">
                Didn't receive the code? Check your spam folder or request a new
                one.
              </p>
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full h-12 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Verify & Continue
        </Button>
      </form>
    </Form>
  );
}
