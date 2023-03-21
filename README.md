# Clothes-Ecommerce
{
	"info": {
		"_postman_id": "f06a58d0-dd0a-4f37-a304-fc62e1bfc81e",
		"name": "ECommerce",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "18966214"
	},
	"item": [
		{
			"name": "Admin",
			"item": [
				{
					"name": "Checktoken",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDMwZWViYTRjYTM4YzAzYWFkNjc5MyIsImlhdCI6MTY2NTMzOTMyOX0.eka45yY37OVV4YbhRfiyX-DD3tZJiB3kHmgwsGp0OwU",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"username\": \"admin\",\r\n    \"password\": \"eblndv5\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:8000/api/admin/check-token",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8000",
							"path": [
								"api",
								"admin",
								"check-token"
							]
						}
					},
					"response": []
				},
				{
					"name": "Login",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"username\": \"admin\",\r\n    \"password\": \"eblndv5\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:8000/api/admin/login",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8000",
							"path": [
								"api",
								"admin",
								"login"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "User",
			"item": [
				{
					"name": "Sign up",
					"request": {
						"auth": {
							"type": "noauth"
						},
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"password\": \"nguyentiensy\",\r\n    \"email\": \"tiensy099009@gmail.com\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:8000/api/signup",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8000",
							"path": [
								"api",
								"signup"
							]
						}
					},
					"response": []
				},
				{
					"name": "Sign in",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxY2FlMWJhNjM0YTBlNjUyM2MwZDg4NyIsImlhdCI6MTY0MDc5MTMxMn0.elJ__LpXCugzSnvJAJDm6vj4vdwB--IpMRQipIHIIy8",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"password\": \"1324\",\r\n    \"email\": \"2\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:8000/api/login",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8000",
							"path": [
								"api",
								"login"
							]
						}
					},
					"response": []
				},
				{
					"name": "Forgot pass",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"email\": \"tiensy099009@gmail.com\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:8000/api/user/verify",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8000",
							"path": [
								"api",
								"user",
								"verify"
							]
						}
					},
					"response": []
				},
				{
					"name": "Submit OTP",
					"request": {
						"method": "POST",
						"header": [],
						"url": {
							"raw": "http://localhost:8000/api/user/author",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8000",
							"path": [
								"api",
								"user",
								"author"
							]
						}
					},
					"response": []
				},
				{
					"name": "New Request",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:8000/api/user/63720797f7f195000cd4f4c0",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8000",
							"path": [
								"api",
								"user",
								"63720797f7f195000cd4f4c0"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "ProductCategory",
			"item": [
				{
					"name": "Create",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"name\": \"pant4\",\r\n    \"desc\": \"notthing\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:8000/api/productcategory",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8000",
							"path": [
								"api",
								"productcategory"
							]
						}
					},
					"response": []
				},
				{
					"name": "Get All",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:8000/api/productcategory",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8000",
							"path": [
								"api",
								"productcategory"
							]
						}
					},
					"response": []
				},
				{
					"name": "Update",
					"request": {
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"name\": \"shirt\",\r\n    \"desc\": \"notthing1\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:8000/api/productcategory/6343111244faf65c2f2853ed",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8000",
							"path": [
								"api",
								"productcategory",
								"6343111244faf65c2f2853ed"
							]
						}
					},
					"response": []
				},
				{
					"name": "Del",
					"request": {
						"method": "DELETE",
						"header": [],
						"url": {
							"raw": "http://localhost:8000/api/productcategory/63451bebc3f04cff152e1b4e",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8000",
							"path": [
								"api",
								"productcategory",
								"63451bebc3f04cff152e1b4e"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Product Varitation",
			"item": [
				{
					"name": "Create",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"color\": [\"Yellow\", \"Red\", \"Light Blue\"],\r\n    \"size\": [\"Yellow\", \"Red\", \"Light Blue\"]\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:8000/api/productvaritation",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8000",
							"path": [
								"api",
								"productvaritation"
							]
						}
					},
					"response": []
				},
				{
					"name": "Update",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"color\": [\"a\", \"b\", \"c\"],\r\n    \"size\": [\"a\", \"b\", \"c\"]\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:8000/api/productvaritation/63533df84345c8436455a4ee",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8000",
							"path": [
								"api",
								"productvaritation",
								"63533df84345c8436455a4ee"
							]
						}
					},
					"response": []
				},
				{
					"name": "Del",
					"request": {
						"method": "DELETE",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "http://localhost:8000/api/productvaritation/63436748199cf482ee6e34ed",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8000",
							"path": [
								"api",
								"productvaritation",
								"63436748199cf482ee6e34ed"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Product Discount",
			"item": [
				{
					"name": "Create",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"name\": \"sale 11/11\",\r\n    \"discountPercent\": 12,\r\n    \"active\": \"true\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:8000/api/productdiscount",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8000",
							"path": [
								"api",
								"productdiscount"
							]
						}
					},
					"response": []
				},
				{
					"name": "Update",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"name\": \"sale 10/10\",\r\n    \"discountPercent\": 12,\r\n    \"active\": \"false\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:8000/api/productdiscount/6343141786a29cca63326852",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8000",
							"path": [
								"api",
								"productdiscount",
								"6343141786a29cca63326852"
							]
						}
					},
					"response": []
				},
				{
					"name": "Del",
					"request": {
						"method": "DELETE",
						"header": [],
						"url": {
							"raw": "http://localhost:8000/api/productdiscount/6343143f86a29cca63326854",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8000",
							"path": [
								"api",
								"productdiscount",
								"6343143f86a29cca63326854"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Product",
			"item": [
				{
					"name": "Create",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDMwZWViYTRjYTM4YzAzYWFkNjc5MyIsImlhdCI6MTY2NTMzOTMyOX0.eka45yY37OVV4YbhRfiyX-DD3tZJiB3kHmgwsGp0OwU",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [],
						"body": {
							"mode": "formdata",
							"formdata": [
								{
									"key": "images",
									"type": "file",
									"src": "/C:/Users/admin/Downloads/Images/279531603_2066381710197275_802115585527419809_n.jpg"
								},
								{
									"key": "name",
									"value": "Testing product 10",
									"contentType": "application/json",
									"type": "text"
								},
								{
									"key": "desc",
									"value": "notthing here",
									"contentType": "application/json",
									"type": "text"
								},
								{
									"key": "stock",
									"value": "55",
									"contentType": "application/json",
									"type": "text"
								},
								{
									"key": "price",
									"value": "100000",
									"contentType": "application/json",
									"type": "text"
								},
								{
									"key": "varitation",
									"value": "63533df84345c8436455a4ee",
									"contentType": "application/json",
									"type": "text"
								},
								{
									"key": "discount",
									"value": "63533e124345c8436455a4f0",
									"contentType": "application/json",
									"type": "text"
								},
								{
									"key": "category",
									"value": "63533dd74345c8436455a4ec",
									"contentType": "application/json",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "http://localhost:8000/api/product/",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8000",
							"path": [
								"api",
								"product",
								""
							]
						}
					},
					"response": []
				},
				{
					"name": "Update",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDMwZWViYTRjYTM4YzAzYWFkNjc5MyIsImlhdCI6MTY2NTMzOTMyOX0.eka45yY37OVV4YbhRfiyX-DD3tZJiB3kHmgwsGp0OwU",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"name\": \"Áo 1\",\r\n    \"desc\": \"null\",\r\n    \"stock\": 110,\r\n    \"price\": 120000,\r\n    \"varitation\": \"634366a0199cf482ee6e34e7\",\r\n    \"category\": \"6343151686a29cca63326856\",\r\n    \"discount\": \"6343141786a29cca63326852\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:8000/api/product/63437078c01227e47feb7e15",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8000",
							"path": [
								"api",
								"product",
								"63437078c01227e47feb7e15"
							]
						}
					},
					"response": []
				},
				{
					"name": "Get All",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:8000/api/product",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8000",
							"path": [
								"api",
								"product"
							]
						}
					},
					"response": []
				},
				{
					"name": "upload Image",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "formdata",
							"formdata": [
								{
									"key": "images",
									"type": "file",
									"src": "/C:/Users/admin/Downloads/Images/meo-anh-long-ngan-beo-thumb.jpg"
								},
								{
									"key": "token",
									"value": "ya29.a0AeTM1if04PgrnLRAqWn93puDC68eQZvEjWHubBMbCv9XvZmCYwAs-hDoCu6Z4Yi3pbTKs-w70-R0TxGnF9F8sRJU1nVkCWpm0vDUUjA77lbUNB_ZzW-SAwjFKe1O_up-0bHUBs8DoRmJMkLsv31CEjPSM9zk7AaCgYKAQISARISFQHWtWOmAbrZaqnIvvZxuLQH5L61MQ0165",
									"contentType": "application/json",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "http://localhost:8000/api/product/image",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8000",
							"path": [
								"api",
								"product",
								"image"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Order",
			"item": [
				{
					"name": "New Request",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"user\": \"6379e573e3c8afc59ea1fa76\",\r\n    \"lineItem\": [{\r\n        \"id\": \"6355e45940a9fcfe29805f04\"\r\n    }],\r\n    \"state\": \"Pending\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:8000/api/order",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8000",
							"path": [
								"api",
								"order"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Tesing google token",
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "EAAQRAuE5MZBkBACFwv6ZAZBOE2xjossZAnD29HVW0MKjQVZBvp7wF5ViW3r2wCimcjBIstGgfZCdwKVB1ZCLNj7tRfontEX1hekkzEHotyuJxZC1GbSm3FON565yIIYdSUs1SnZBBT9lpiRl05nZBMfu0NLTfQI9zS1uVExS2bWoKttBDW4OIDMZCreIEdMLTYl4epFZAkudZAGaLEZCc1seQAsEZBR",
							"type": "string"
						}
					]
				},
				"method": "GET",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:8000/api/auth/facebook",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "8000",
					"path": [
						"api",
						"auth",
						"facebook"
					]
				}
			},
			"response": []
		}
	]
}
