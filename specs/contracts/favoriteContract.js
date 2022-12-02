/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
const itActsAsRestaurantModel = (favoriteRestaurant) => {
  it('should return the restaurant that has been added', async () => {
    favoriteRestaurant.putRestaurant({
      id: 1,
    });
    favoriteRestaurant.putRestaurant({
      id: 2,
    });

    expect(await favoriteRestaurant.getRestaurant(1))
      .toEqual({
        id: 1,
      });
    expect(await favoriteRestaurant.getRestaurant(2))
      .toEqual({
        id: 2,
      });
    expect(await favoriteRestaurant.getRestaurant(3))
      .toEqual(undefined);
  });

  it('should reject a favorite from being added if it does not have the correct property', async () => {
    favoriteRestaurant.putRestaurant({
      aProperty: 'property',
    });

    expect(await favoriteRestaurant.getAllRestaurants())
      .toEqual([]);
  });

  it('can return all of the movies that have been added', async () => {
    favoriteRestaurant.putRestaurant({
      id: 1,
    });
    favoriteRestaurant.putRestaurant({
      id: 2,
    });

    expect(await favoriteRestaurant.getAllRestaurants())
      .toEqual([{
        id: 1,
      },
      {
        id: 2,
      },
      ]);
  });

  it('should remove favorite movie', async () => {
    favoriteRestaurant.putRestaurant({
      id: 1,
    });
    favoriteRestaurant.putRestaurant({
      id: 2,
    });
    favoriteRestaurant.putRestaurant({
      id: 3,
    });

    await favoriteRestaurant.deleteRestaurant(1);

    expect(await favoriteRestaurant.getAllRestaurants())
      .toEqual([{
        id: 2,
      },
      {
        id: 3,
      },
      ]);
  });

  it('should handle request to remove a movie even though the movie has not been added', async () => {
    favoriteRestaurant.putRestaurant({
      id: 1,
    });
    favoriteRestaurant.putRestaurant({
      id: 2,
    });
    favoriteRestaurant.putRestaurant({
      id: 3,
    });

    await favoriteRestaurant.deleteRestaurant(4);

    expect(await favoriteRestaurant.getAllRestaurants())
      .toEqual([{
        id: 1,
      },
      {
        id: 2,
      },
      {
        id: 3,
      },
      ]);
  });
};

export { itActsAsRestaurantModel };