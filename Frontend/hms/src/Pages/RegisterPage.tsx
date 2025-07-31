import { Button, PasswordInput, SegmentedControl, TextInput } from '@mantine/core'
import { IconHeartbeat } from '@tabler/icons-react'
import React from 'react'
import { useForm } from '@mantine/form';
import { Link } from 'react-router-dom';

const RegisterPage = () => {

  const form = useForm({
    initialValues: {
        type:"PATIENT",
        email: '',
        password: '',
        confirmPassword: '',
    },

    validate: {
      email: (value: any) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value: any) => (!value? 'Password is required' : null),
        confirmPassword: (value: any, values: any) => (value === values.password ? 'Passwords do not match' : null)
    },
  });

  const handleSubmit = (values:typeof form.values) => {
    console.log( values);
  };


  return (
    <div style={{background:'url("/bg4.jpg")'}} className='h-screen w-screen !bg-cover 
    !bg-center !bg-no-repeat flex flex-col items-center justify-center'>

      <div className=" py-3  text-primary-300 flex gap-1 items-center">
        <IconHeartbeat size={45} stroke={2.5} />
        <span className="font-heading font-semibold text-4xl">MedPulse</span>
      </div>


      <div className='w-[450px] backdrop-blur-md p-10 py-8 rounded-lg'>
        <form onSubmit={form.onSubmit(handleSubmit)} className='flex flex-col gap-5 [&_input]:placeholder-neutral-100 [&_.mantine-Input-input]:!border-white focus-within:[&_.mantine-Input-input]:!border-primary-400 [&_.mantine-Input-input]:!border 
        [&_input]:!pl-2 [&_svg]:text-white [&_input]:!text-white'>
          <div className='self-center font-medium font-heading text-white
          text-xl'>Register</div>
            <SegmentedControl {...form.getInputProps("type")} fullWidth size="md" radius="md" color="primary" bg="none"
            className='[&_*]:!text-white border border-white'
      data={[{ label: 'Patient', value: 'PATIENT' },
        { label: 'Doctor', value: 'Doctor' },
        { label: 'Admin', value: 'ADMIN' },]}/>

          <TextInput {...form.getInputProps('email')} className='transition duration-300' variant="unstyled" size="md" radius="md" placeholder="Email"
    />
    <PasswordInput {...form.getInputProps('password')} className='transition duration-300' variant="unstyled" size="md" radius="md" placeholder="Password"
    />
    <PasswordInput {...form.getInputProps('confirmPassword')} className='transition duration-300' variant="unstyled" size="md" radius="md" placeholder="Confirm Password"
    />

    <div className='text-neutral-100 text-sm self-center'>Have an 
      account? <Link to="/login" className="hover:underline">Login</Link></div>
        </form>
      </div>

    </div>
  )
}

export default RegisterPage