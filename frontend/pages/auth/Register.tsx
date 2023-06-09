import { Button, MenuItem, TextField, ThemeProvider } from '@mui/material'
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import Link from 'next/link'
import { RegisterFormData } from '@/typings'
import { theme } from '@/utils/theme'
import { Sexies, UFs } from '@/utils/data'
import { cpf } from 'cpf-cnpj-validator'

const Register = () => {
    const { register, getValues, formState: { errors }, handleSubmit, watch } = useForm<RegisterFormData>();
    const validateCPF = (cpfnumber: string) => {
        return cpf.isValid(cpfnumber);
    }
    const onSubmit: SubmitHandler<RegisterFormData> = (data) => {
        console.log(data);
    };
    return (
        <>
            <ThemeProvider theme={theme}>
                <main className='min-h-screen flex flex-col justify-center items-center'>
                    <div className='w-[450px] h-full flex flex-col justify-between gap-y-4'>
                        <div className='text-5xl font-semibold font-titleFont text-center'>
                            Faça o seu Registro
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-2' action="">
                            <div className='flex flex-row gap-2'>
                                <TextField
                                    label='Nome'
                                    focused
                                    type="text"
                                    className='w-full'
                                    {...register("name", {
                                        required: true,
                                        minLength: 3,
                                    })}
                                    helperText={errors.name && (errors.name.type === 'required' ? 'Preencha seu nome' : 'Deve ter no mínimo 3 caractéres')}
                                />
                                <TextField
                                    label='Sobrenome'
                                    focused
                                    type="text"
                                    className='w-full'
                                    {...register("lastname", {
                                        required: true,
                                        minLength: 3,
                                    })}
                                    helperText={errors.lastname && (errors.lastname.type === 'required' ? 'Preencha o seu sobrenome' : 'Deve ter no mínimo 3 caractéres')}
                                />
                            </div>
                            <TextField
                                label='Email'
                                focused
                                type="email"
                                className='w-full'
                                {...register("email", {
                                    required: true,
                                    pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                })}
                                helperText={errors.email && (errors.email.type === 'required' ? 'Preencha seu email' : 'Email inválido')}
                            />
                            <div className='flex flex-row gap-2'>
                                <TextField
                                    label='CPF'
                                    focused
                                    type="text"
                                    className='w-full'
                                    {...register("cpf", {
                                        required: true,
                                        validate: validateCPF,
                                    })}
                                    helperText={errors.cpf && (errors.cpf.type === 'required' ? 'Digite o seu CPF' : 'CPF inválido')}
                                    inputProps={{ maxLength: 11 }}
                                />
                                <TextField
                                    label='Telefone'
                                    focused
                                    type="tel"
                                    className='w-full'
                                    {...register("tel", {
                                        required: true,
                                        minLength: 11,
                                    })}
                                    helperText={errors.tel && (errors.tel.type === 'required' ? 'Digite seu Telefone' : 'Telefone inválido')}
                                    inputProps={{ maxLength: 11 }}
                                />
                            </div>
                            <div className='flex flex-row gap-2'>
                                <TextField
                                    label='CEP'
                                    focused
                                    type="text"
                                    className='w-full'
                                    {...register("cep", {
                                        required: true,
                                        minLength: 8,
                                    })}
                                    helperText={errors.cep && (errors.cep.type === 'required' ? 'Digite o seu CEP' : 'CEP inválido')}
                                    inputProps={{ maxLength: 8 }}
                                />
                                <TextField
                                    label='Cidade'
                                    focused
                                    type="text"
                                    className='w-full'
                                    {...register("city", {
                                        required: true,
                                    })}
                                    helperText={errors.city && (errors.city.type === 'required' && 'Digite sua cidade')}
                                />
                            </div>
                            <TextField
                                label='Endereço'
                                focused
                                type="text"
                                className='w-full'
                                {...register("adress", {
                                    required: true,
                                })}
                                helperText={errors.adress && (errors.adress.type === 'required' && 'Digite seu endereço')}
                            />
                            <div className='flex flex-row gap-2'>
                                <TextField
                                    label='Número (opcional)'
                                    focused
                                    type="number"
                                    className='w-full'
                                    {...register("number", {
                                        required: false,
                                    })}
                                />
                                <TextField
                                    label='UF'
                                    focused
                                    select
                                    type="text"
                                    className='w-full'
                                    {...register("uf", {
                                        required: true,
                                    })}
                                    helperText={errors.uf && (errors.uf.type === 'required' && 'Selecione sua UF')}
                                >
                                    {UFs.map((uf, index) => (
                                        <MenuItem key={index} value={uf.uf}>{uf.uf}</MenuItem>
                                    ))}
                                </TextField>
                            </div>
                            <div className='flex flex-row gap-2'>
                                <TextField
                                    label='Sexo'
                                    focused
                                    select
                                    type="text"
                                    className='w-full'
                                    {...register("sex", {
                                        required: true,
                                    })}
                                    helperText={errors.sex && (errors.sex.type === 'required' && 'Selecione uma opção')}
                                >
                                    {Sexies.map((sex, index) => (
                                        <MenuItem key={index} value={sex.sex} >{sex.sex}</MenuItem>
                                    ))}
                                </TextField>
                                <TextField
                                    label='Data Nascimento'
                                    focused
                                    className='w-full'
                                    type="date"
                                    {...register("birthdate", {
                                        required: true,
                                    })}
                                    helperText={errors.birthdate && (errors.birthdate.type === 'required' && 'Selecione sua data de nascimento')}
                                />
                            </div>
                            <TextField
                                label='Senha'
                                focused
                                className='w-full'
                                type="password"
                                {...register("password", {
                                    required: true,
                                    pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                })}
                                helperText={errors.password && (errors.password.type === 'required' ? 'Preencha a sua senha.' : 'Sua senha deve ter no mínimo 8 caractéres, 1 letra e 1 número.')}
                            />
                            <TextField
                                label='Confirme sua senha'
                                className='w-full'
                                focused
                                type="password"
                                {...register("confirmpassword", {
                                    required: true,
                                    validate: (val: string) => {
                                        if(watch('password') != val){
                                            return 'Senhas não conferem. '
                                        }
                                    }
                                })}
                                helperText={errors.confirmpassword && (errors.confirmpassword.type === 'required' ? 'Preencha a sua senha.' : 'Senhas não conferem')}
                            />
                            <Button type="submit" className='w-full bg-primary' variant='contained'>Registrar</Button>
                        </form>
                        <p className='text-xs self-end'>Já possui uma conta? <Link className='text-primary underline' href={"/auth/Login"}>Faça o login agora!</Link></p>
                    </div>
                </main>
            </ThemeProvider>
        </>
    )
}

export default Register