import swaggerJsDoc from "swagger-jsdoc";

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentation",
      version: "1.0.0",
      description: "API documentation for So Yummy project",
    },
    components: {
        schemas: {
            User: {
                type: 'object',
                properties: {
                  name: {
                    type: 'string',
                    description: 'User name',
                  },
                  password: {
                    type: 'string',
                    description: 'User password',
                  },
                  email: {
                    type: 'string',
                    description: 'User email',
                  },
                  token: {
                    type: 'string',
                    description: 'User token',
                  },
                  avatarURL: {
                    type: 'string',
                    description: 'URL of the user avatar',
                  },
                  verified: {
                    type: 'boolean',
                    description: 'Whether the user is verified',
                  },
                  verificationToken: {
                    type: 'string',
                    description: 'User verification token',
                  },
                  favorites: {
                    type: 'array',
                    items: {
                      type: 'string',
                    },
                    description: 'User favorites',
                  },
                  shoppingList: {
                    type: 'array',
                    items: {
                      type: 'string',
                    },
                    description: 'User shopping list',
                  },
                },
          },
          Ingredient: {
            type: 'object',
            properties: {
              ttl: {
                type: 'string',
                description: 'Title of the ingredient',
              },
              desc: {
                type: 'string',
                description: 'Description of the ingredient',
              },
              t: {
                type: 'string',
                description: 'Type of the ingredient',
              },
              thb: {
                type: 'string',
                description: 'Thumbnail of the ingredient',
              },
            },
          },
          Recipes: {
            type: 'object',
            properties: {
              title: { type: 'string' },
              category: { type: 'string' },
              area: { type: 'string' },
              instructions: { type: 'string' },
              description: { type: 'string' },
              thumb: { type: 'string' },
              preview: { type: 'string' },
              time: { type: 'string' },
              favorites: { 
                type: 'array',
                items: { type: 'string' },
              },
              youtube:{ type: 'string' },
              tags: { 
                type: 'array',
                items: { type: 'string' },
                    },
            }
        }//,
          // ... other schemas
        },
      },
    servers: [
      {
        url: "http://localhost:5000",
        description: "Development server",
      },
    ],
  },
  apis: ["./routes/ingredientsRouter.js", "./routes/ownRecipeRouter.js", "./routes/recipesRouter.js"],
};

const paths = {
    '/users/signup': {
      post: {
        tags: ['Users'],
        summary: 'Sign up',
        description: 'Sign up a new user',
        operationId: 'signup',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/User'
              }
            }
          },
          required: true
        },
        responses: {
          '200': {
            description: 'User signed up successfully'
          }
        }
      }
    },
    '/users/login': {
      post: {
        tags: ['Users'],
        summary: 'Login',
        description: 'Login a user',
        operationId: 'login',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/User'
              }
            }
          },
          required: true
        },
        responses: {
          '200': {
            description: 'User logged in successfully'
          }
        }
      }
    },
    '/users/logout': {
      post: {
        tags: ['Users'],
        summary: 'Logout',
        description: 'Logout a user',
        operationId: 'logout',
        responses: {
          '200': {
            description: 'User logged out successfully'
          }
        }
      }
    },
    '/users/current': {
      get: {
        tags: ['Users'],
        summary: 'Get current user',
        description: 'Get details of the current user',
        operationId: 'getCurrentUser',
        responses: {
          '200': {
            description: 'Current user details',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/User'
                }
              }
            }
          }
        }
      }
    },
    '/users/verify/{verificationToken}': {
      get: {
        tags: ['Users'],
        summary: 'Verify user',
        description: 'Verify a user with a token',
        operationId: 'verifyUser',
        parameters: [
          {
            name: 'verificationToken',
            in: 'path',
            required: true,
            schema: {
              type: 'string'
            }
          }
        ],
        responses: {
          '200': {
            description: 'User verified successfully'
          }
        }
      }
    },
    '/users/verify': {
      post: {
        tags: ['Users'],
        summary: 'Resend verification',
        description: 'Resend verification to a user',
        operationId: 'resendVerification',
        responses: {
          '200': {
            description: 'Verification resent successfully'
          }
        }
      }
    },
    '/users/': {
      patch: {
        tags: ['Users'],
        summary: 'Update user name',
        description: 'Update the name of a user',
        operationId: 'updateUserName',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/User'
              }
            }
          },
          required: true
        },
        responses: {
          '200': {
            description: 'User name updated successfully'
          }
        }
      }
    },
    '/users/upload': {
      post: {
        tags: ['Users'],
        summary: 'Upload avatar',
        description: 'Upload an avatar for a user',
        operationId: 'uploadAvatar',
        requestBody: {
          content: {
            'multipart/form-data': {
              schema: {
                type: 'object',
                properties: {
                  image: {
                    type: 'string',
                    format: 'binary'
                  }
                }
              }
            }
          },
          required: true
        },
        responses: {
          '200': {
            description: 'Avatar uploaded successfully'
          }
        }
      }
    },'/ingredients/list': {
        get: {
          tags: ['Ingredients'],
          summary: 'List all ingredients',
          description: 'Get a list of all ingredients',
          operationId: 'listIngredients',
          responses: {
            '200': {
              description: 'Ingredients listed successfully',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      $ref: '#/components/schemas/Ingredient'
                    }
                  }
                }
              }
            }
          }
        }
      },
      '/ingredients/test': {
        get: {
          tags: ['Ingredients'],
          summary: 'Search for an ingredient',
          description: 'Search for an ingredient by name',
          operationId: 'searchIngredient',
          parameters: [{
            name: 'name',
            in: 'query',
            description: 'Name of the ingredient to search',
            required: true,
            schema: {
              type: 'string'
            }
          }],
          responses: {
            '200': {
              description: 'Ingredient found'
            },
            '404': {
              description: 'Ingredient not found'
            }
          }
        }
      },
      '/ingredients': {
        get: {
          tags: ['Ingredients'],
          summary: 'Get recipes by ingredient',
          description: 'Get a list of recipes that contain a specific ingredient',
          operationId: 'getRecipesByIngredient',
          parameters: [{
            name: 'ingredient',
            in: 'query',
            description: 'Name of the ingredient to find recipes for',
            required: true,
            schema: {
                type: 'array',
                items: {
                    $ref: '#/components/schemas/Recipes'
                  }
            }
          }],
          responses: {
            '200': {
              description: 'Recipes found',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      $ref: '#/components/schemas/Recipes'
                    }
                  }
                }
              }
            },
            '404': {
              description: 'No recipes found for this ingredient'
            }
          }
        }
      },
      '/ownRecipes': {
        post: {
          tags: ['ownRecipes'],
          summary: 'Add a new recipe',
          description: 'Add a new recipe to the database',
          operationId: 'addRecipe',
          parameters: [{
            name: 'recipe',
            in: 'body',
            description: 'Recipe to add',
            required: true,
            schema: {
              type: 'object',
              items: {
                $ref: '#/components/schemas/Recipes'
              }
            }
          }],
          responses: {
            '201': {
              description: 'Recipe created'
            },
            '400': {
              description: 'Bad request'
            }
          }
        },
        delete: {
          tags: ['ownRecipes'],
          summary: 'Delete a recipe by ID',
          description: 'Delete a specific recipe from the database',
          operationId: 'deleteRecipeById',
          parameters: [{
            name: 'recipeId',
            in: 'path',
            description: 'ID of the recipe to delete',
            required: true,
            schema: {
              type: 'string'
            }
          }],
          responses: {
            '200': {
              description: 'Recipe deleted'
            },
            '404': {
              description: 'Recipe not found'
            }
          }
        }
      },
      '/ownRecipes/{userId}/recipes': {
        get: {
          tags: ['ownRecipes'],
          summary: 'Get recipes by user ID',
          description: 'Get a list of recipes created by a specific user',
          operationId: 'getUserRecipes',
          parameters: [{
            name: 'userId',
            in: 'path',
            description: 'ID of the user',
            required: true,
            schema: {
              type: 'string'
            }
          }],
          responses: {
            '200': {
              description: 'Recipes found'
            },
            '404': {
              description: 'Recipes not found'
            }
          }
        }
      },
      '/recipes/main-page': {
        get: {
          tags: ['Recipes'],
          summary: 'Get recipes for main page',
          description: 'Fetches a list of recipes for the main page',
          operationId: 'getRecipesHandler',
          responses: {
            '200': {
              description: 'Recipes fetched successfully',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      $ref: '#/components/schemas/Recipes'
                    }
                  }
                }
              }
            }
          }
        }
      },
      '/recipes/category-list': {
        get: {
          tags: ['Recipes'],
          summary: 'Get list of recipe categories',
          description: 'Fetches a list of all recipe categories',
          operationId: 'getCategoryHandler',
          responses: {
            '200': {
              description: 'Categories fetched successfully',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      $ref: '#/components/schemas/Category'
                    }
                  }
                }
              }
            }
          }
        }
      },
      '/recipes/{category}': {
        get: {
          tags: ['Recipes'],
          summary: 'Get recipes by category',
          description: 'Fetches a list of recipes in a specific category',
          operationId: 'getCategoryPageHandler',
          parameters: [{
            name: 'category',
            in: 'path',
            description: 'Category of the recipes',
            required: true,
            schema: {
              type: 'string'
            }
          }],
          responses: {
            '200': {
              description: 'Recipes fetched successfully',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      $ref: '#/components/schemas/Recipes'
                    }
                  }
                }
              }
            }
          }
        }
      },
      '/recipes/{id}': {
        get: {
          tags: ['Recipes'],
          summary: 'Get recipe by ID',
          description: 'Fetches a specific recipe by its ID',
          operationId: 'getRecipeById',
          parameters: [{
            name: 'id',
            in: 'path',
            description: 'ID of the recipe',
            required: true,
            schema: {
              type: 'string'
            }
          }],
          responses: {
            '200': {
              description: 'Recipe fetched successfully',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/Recipes'
                  }
                }
              }
            }
          }
        }
      },
      '/search': {
        get: {
          tags: ['Search'],
          summary: 'Get recipe by title',
          description: 'Fetches a specific recipe by its title',
          operationId: 'getRecipeByTitle',
          parameters: [{
            name: 'title',
            in: 'query',
            description: 'Title of the recipe',
            required: true,
            schema: {
              type: 'string'
            }
          }],
          responses: {
            '200': {
              description: 'Recipe fetched successfully',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/Recipes'
                  }
                }
              }
            },
            '404': {
              description: 'Recipe not found',
            }
          }
        }
      }
  };


swaggerOptions.swaggerDefinition.paths = paths;

export const swaggerDocs = swaggerJsDoc(swaggerOptions);