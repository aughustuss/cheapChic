import { ReusableButton } from '@/components/reusables/Button'
import ReusableTextfield from '@/components/reusables/Textfield'
import { theme } from '@/utils/theme'
import { Button, TextField, ThemeProvider } from '@mui/material'
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import Link from 'next/link'
import { LoginFormData } from '@/typings'

const Login = () => {
    const { register, getValues, formState: { errors }, handleSubmit } = useForm<LoginFormData>();
    const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
        console.log(data);
    }
    return (
        <>
            <ThemeProvider theme={theme}>
                <main className='w-screen min-h-screen flex flex-col justify-center items-center'>
                    <div className='w-[350px] h-full flex flex-col justify-between gap-y-4'>
                        <div className='text-5xl font-semibold font-titleFont text-center'>
                            Faça o seu login
                        </div>
                        <form className='flex flex-col gap-y-2' onSubmit={handleSubmit(onSubmit)}>
                            <TextField
                                {...register("email", {
                                    required: true,
                                    pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                })}
                                focused
                                helperText={errors.email && (errors.email.type === 'required' ? 'Preencha seu email' : 'Email inválido')}
                                label='Email'
                                className='w-full'
                                type="email"
                            />

                            <TextField
                                label='Senha'
                                className='w-full'
                                type="password"
                                focused
                                {...register("password", {
                                    required: true,
                                    pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                })}
                                helperText={errors.password && (errors.password.type === 'required' ? 'Preencha a sua senha.' : 'Sua senha deve ter no mínimo 8 caractéres, 1 letra e 1 número.')}
                            />
                            <Button type="submit" className='w-full' variant='contained'>Entrar</Button>
                        </form>
                        <div className='text-gray w-full flex flex-col gap-y-4'>
                            <p className='text-center text-xs'>ou</p>
                            <div className='flex flex-col gap-y-4 w-full items-center'>
                                <button className='flex flex-row items-center gap-x-2 border justify-center min-w-[300px] rounded-md p-3 hover:shadow-md transition duration-200 hover:bg-white'><FcGoogle size={28} /> Entrar com o Google</button>
                                <button className='flex flex-row items-center gap-x-2 border justify-center min-w-[300px] rounded-md p-3 hover:shadow-md transition duration-200 hover:bg-white'><FaGithub size={28} /> Entrar com o GitHub</button>
                            </div>
                        </div>
                        <p className='text-xs self-end'>Ainda não possui uma conta? <Link className='text-primary underline' href={"/auth/Register"}>Crie uma agora!</Link></p>
                    </div>
                </main>
            </ThemeProvider>
        </>
    )
}

export default Login