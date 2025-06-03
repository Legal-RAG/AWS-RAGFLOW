import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useTranslate } from '@/hooks/common-hooks';
import { DiscordLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import { useSearchParams } from 'umi';
import { SignInForm, SignUpForm, VerifyEmailForm } from './form';
import { Step, useSwitchStep } from './hooks';

function LoginFooter() {
  return (
    <section className="pt-4">
      <Separator />
      <p className="text-center pt-4 text-slate-600">
        or continue with professional accounts
      </p>
      <div className="flex gap-4 justify-center pt-[20px]">
        <div className="p-2 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-colors cursor-pointer">
          <GitHubLogoIcon className="w-6 h-6 text-slate-700"></GitHubLogoIcon>
        </div>
        <div className="p-2 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-colors cursor-pointer">
          <DiscordLogoIcon className="w-6 h-6 text-slate-700"></DiscordLogoIcon>
        </div>
      </div>
    </section>
  );
}

export function SignUpCard() {
  const { t } = useTranslate('login');

  const { switchStep } = useSwitchStep(Step.SignIn);

  return (
    <Card className="w-[420px] shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
      <CardHeader className="text-center pb-6">
        <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
          <span className="text-2xl font-bold text-white">⚖️</span>
        </div>
        <CardTitle className="text-2xl font-bold text-slate-800 mb-2">
          Join LegalFlow AI
        </CardTitle>
        <p className="text-slate-600 text-sm">
          Create your account to access advanced legal document analysis
        </p>
      </CardHeader>
      <CardContent>
        <SignUpForm></SignUpForm>
        <div className="text-center">
          <Button
            variant={'link'}
            className="pt-6 text-blue-600 hover:text-blue-800"
            onClick={switchStep}
          >
            Already practicing with us?{' '}
            <span className="font-semibold">Sign In</span>
          </Button>
        </div>
        <LoginFooter></LoginFooter>
      </CardContent>
    </Card>
  );
}

export function SignInCard() {
  const { t } = useTranslate('login');
  const { switchStep } = useSwitchStep(Step.SignUp);

  return (
    <Card className="w-[420px] shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
      <CardHeader className="text-center pb-6">
        <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
          <span className="text-2xl font-bold text-white">⚖️</span>
        </div>
        <CardTitle className="text-2xl font-bold text-slate-800 mb-2">
          Welcome Back, Counselor
        </CardTitle>
        <p className="text-slate-600 text-sm">
          Access your legal AI workspace and case documents
        </p>
      </CardHeader>
      <CardContent>
        <SignInForm></SignInForm>
        <Button
          className="w-full mt-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-3 rounded-lg transition-all duration-200"
          onClick={switchStep}
          variant={'secondary'}
        >
          New to Legal Practice? Register Firm Account
        </Button>
        <LoginFooter></LoginFooter>
      </CardContent>
    </Card>
  );
}

export function VerifyEmailCard() {
  // const { t } = useTranslate('login');

  return (
    <Card className="w-[420px] shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
      <CardHeader className="text-center pb-6">
        <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center">
          <span className="text-2xl font-bold text-white">📧</span>
        </div>
        <CardTitle className="text-2xl font-bold text-slate-800">
          Verify Professional Email
        </CardTitle>
        <p className="text-slate-600 text-sm">
          We've sent a secure verification code to authenticate your legal
          credentials
        </p>
      </CardHeader>
      <CardContent>
        <section className="flex gap-y-6 flex-col">
          <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none text-slate-800">
                Verification code sent to your firm email:
              </p>
              <p className="text-sm text-blue-600 font-semibold">
                yifanwu92@gmail.com
              </p>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Resend Code
            </Button>
          </div>
          <VerifyEmailForm></VerifyEmailForm>
        </section>
      </CardContent>
    </Card>
  );
}

const Login = () => {
  const [searchParams] = useSearchParams();
  const step = Number((searchParams.get('step') ?? Step.SignIn) as Step);

  return (
    <div className="w-full h-full flex items-center justify-center bg-white">
      {/* Main content */}
      <div className="mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">
            LegalFlow <span className="text-blue-600">AI</span>
          </h1>
          <p className="text-lg text-slate-600">
            Advanced Legal Document Intelligence & Case Analysis Platform
          </p>
        </div>

        {/* Login cards */}
        <div className="flex justify-center">
          {step === Step.SignIn && <SignInCard></SignInCard>}
          {step === Step.SignUp && <SignUpCard></SignUpCard>}
          {step === Step.VerifyEmail && <VerifyEmailCard></VerifyEmailCard>}
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-slate-500">
          <p>© 2024 LegalFlow AI. Trusted by Law Firms Worldwide.</p>
          <p className="mt-1">
            Confidential • Bar Compliant • Professional Grade
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
