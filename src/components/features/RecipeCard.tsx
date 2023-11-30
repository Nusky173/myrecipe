import { Category } from '@/lib/utils';
import { Recipe } from '@prisma/client';
import { Hourglass, Microwave, Utensils } from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '../ui/card';

interface RecipeCard {
    recipe: Recipe;
}

const RecipeCard = (props: RecipeCard) => {
    const category = Category[props.recipe.category.toString()];

    return (
        <Card className='min-h-52 flex w-full flex-col'>
            <CardHeader>
                <CardTitle className='text-center text-base'>
                    {props.recipe.name}
                </CardTitle>
                <CardDescription className='text-end text-lg'>
                    {category}
                </CardDescription>
            </CardHeader>
            <CardContent className='basis-full'>
                <div>test</div>
            </CardContent>
            <CardFooter className='flex items-start justify-between gap-1  '>
                {!!props.recipe.preparationTime &&
                    props.recipe.preparationTime > 0 && (
                        <div className='basis-1/3'>
                            <Utensils
                                strokeWidth={1.25}
                                color='#37c125'
                                className='ml-2'
                            />
                            {props.recipe.preparationTime} min
                        </div>
                    )}
                {
                    <div className='flex basis-1/3 flex-col items-center'>
                        <Microwave
                            strokeWidth={1.25}
                            color='#37c125'
                        />
                        {props.recipe.cookingTime
                            ? props.recipe.cookingTime
                            : 0}{' '}
                        min
                    </div>
                }
                {
                    <div className='flex basis-1/3 flex-col items-end'>
                        <Hourglass
                            color='#37c125'
                            strokeWidth={1.25}
                            className='mr-2'
                        />
                        {props.recipe.restTime ? props.recipe.restTime : 0} min
                    </div>
                }
            </CardFooter>
        </Card>
    );
};

export default RecipeCard;
