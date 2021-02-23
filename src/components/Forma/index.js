import React from 'react'
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Text
} from './FormaElements';

const FormaElementi = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon>lan</Icon>
                    <FormContent>
                        <Form action='#'>
                        <FormH1>Posaljite upit za izradu sajta</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor='for'>Ime i prezime</FormLabel>
                        <FormInput type='name' required />
                        <FormButton type='submit'>Posalji</FormButton>
                        <Text>Nesto</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default FormaElementi;
