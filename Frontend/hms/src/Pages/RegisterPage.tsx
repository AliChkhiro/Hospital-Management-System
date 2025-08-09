import {
  Button,
  PasswordInput,
  SegmentedControl,
  TextInput,
} from '@mantine/core';
import { IconHeartbeat } from '@tabler/icons-react';
import React, { useState } from 'react';
import { useForm } from '@mantine/form';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../service/UserService';
import { errorNotification, successNotification } from '../Utility/NotificationUtil';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const form = useForm({
    initialValues: {
      name: '',
      role: 'PATIENT',
      email: '',
      password: '',
      confirmPassword: '',
    },

    validate: {
      name: (value: any) => (value ? null : 'Name is required'),
      email: (value: any) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value: any) =>
        !value
          ? 'Password is required'
          : !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/.test(
              value
            )
          ? 'Password must be 8-15 characters and include uppercase, lowercase, number, and special character'
          : null,

      confirmPassword: (value: any, values: any) =>
        !value
          ? 'Please confirm your password'
          : value !== values.password
          ? 'Passwords do not match'
          : null,

      /*confirmPassword: (value: any, values: any) =>
      (value === values.password ? null : "Passwords do not match"),*/
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    setLoading(true);
    registerUser(values).then((_data) => {
        successNotification('Registered Successfully.');
        navigate('/login');
      }).catch((error) => {
        errorNotification(error.response.data.errorMessage);
      }).finally(() => setLoading(false));
  };

  return (
    <div
      style={{ background: 'url("/bg4.jpg")' }}
      className="h-screen w-screen !bg-cover 
    !bg-center !bg-no-repeat flex flex-col items-center justify-center">
      <div className=" py-3  text-primary-300 flex gap-1 items-center">
        <IconHeartbeat size={45} stroke={2.5} />
        <span className="font-heading font-semibold text-4xl">MedPulse</span>
      </div>

      <div className="w-[450px] backdrop-blur-md p-10 py-8 rounded-lg">
        <form
          onSubmit={form.onSubmit(handleSubmit)}
          className="flex flex-col gap-5 [&_input]:placeholder-neutral-100 [&_.mantine-Input-input]:!border-white focus-within:[&_.mantine-Input-input]:!border-primary-400 [&_.mantine-Input-input]:!border 
        [&_input]:!pl-2 [&_svg]:text-white [&_input]:!text-white">
          <div
            className="self-center font-medium font-heading text-white
          text-xl">
            Register
          </div>
          <SegmentedControl
            {...form.getInputProps('type')}
            fullWidth
            size="md"
            radius="md"
            color="primary"
            bg="none"
            className="[&_*]:!text-white border border-white"
            data={[
              { label: 'Patient', value: 'PATIENT' },
              { label: 'Doctor', value: 'Doctor' },
              { label: 'Admin', value: 'ADMIN' },
            ]}
          />
          <TextInput
            {...form.getInputProps('name')}
            className="transition duration-300"
            variant="unstyled"
            size="md"
            radius="md"
            placeholder="Name"
          />

          <TextInput
            {...form.getInputProps('email')}
            className="transition duration-300"
            variant="unstyled"
            size="md"
            radius="md"
            placeholder="Email"
          />
          <PasswordInput
            {...form.getInputProps('password')}
            className="transition duration-300"
            variant="unstyled"
            size="md"
            radius="md"
            placeholder="Password"
          />
          <PasswordInput
            {...form.getInputProps('confirmPassword')}
            className="transition duration-300"
            variant="unstyled"
            size="md"
            radius="md"
            placeholder="Confirm Password"
          />
          <Button loading={loading} radius="md" size="md" type="submit" color="primary">
            Register
          </Button>
          <div className="text-neutral-100 text-sm self-center">
            Have an account?{' '}
            <Link to="/login" className="hover:underline">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
