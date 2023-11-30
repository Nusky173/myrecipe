import RecipeCard from '@/components/features/RecipeCard';
import CreateRecipe from '@/components/features/ui/CreateRecipe';
import { getAuthUser } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

const RecipesPage = async () => {
    const user = await getAuthUser().then((res) => res);

    const myRecipes = await prisma.recipe.findMany({
        where: {
            userId: user!.id,
        },
    });

    if (myRecipes.length > 0) {
        console.log(myRecipes.length);
        return (
            <>
                <div className='text-lg font-semibold'>Mes recettes</div>
                {myRecipes.length > 0 &&
                    myRecipes.map((recipe, key) => {
                        return (
                            <>
                                <RecipeCard
                                    recipe={recipe}
                                    key={key}
                                ></RecipeCard>
                            </>
                        );
                    })}
            </>
        );
    } else {
        return (
            <div className='mt-20 flex w-2/3 flex-col items-center justify-start'>
                <div className='text-center text-lg'>
                    Commencez par créer une recette
                </div>
                <CreateRecipe className='mt-8 '></CreateRecipe>
            </div>
        );
    }
};

export default RecipesPage;
