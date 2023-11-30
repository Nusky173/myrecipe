import { Button, ButtonProps } from '@/components/ui/button';
import { PropsWithChildren } from 'react';

interface CreateRecipeProps extends ButtonProps {}

const CreateRecipe = (props: PropsWithChildren<CreateRecipeProps>) => (
    <Button className={`${props.className} text-base`}>+ Nouveau</Button>
);

export default CreateRecipe;
