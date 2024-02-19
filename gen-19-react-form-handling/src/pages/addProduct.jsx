import axios from "axios";
import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function CheckoutPage() {
    const schema = yup.object().shape({
        name: yup.string().required("Field Name is required"),
        images: yup.array().of(yup.string().url().required('Image link is required')).min(1, 'At least one image link is required'),
        price: yup.number().positive().required("Price is required"),
        category: yup
            .string()
            .oneOf(["best seller", "autumn", "winter", "daily"])
            .required("Category is required"),
        colors: yup.array().of(
            yup.object().shape({
                colorName: yup.string().required('Color name is required'),
                hexCode: yup.string().matches(/^#[0-9A-Fa-f]{6}$/, 'Invalid hex code').required('Hex code is required'),
            })
        ),
        sizes: yup.array().of(yup.string()).min(1).required('At least one size is required'),
    });

    const defaultValues = {
        name: '',
        images: [''],
        price: '',
        category: '',
        colors: [{ colorName: '', hexCode: '' }],
        sizes: [],
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        control
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues,
    });

    const { fields:color, append:appendColor, remove:removeColor } = useFieldArray({
        control,
        name: 'colors',
    });

    const { fields:image, append:appendImage, remove:removeImage } = useFieldArray({
        control,
        name: 'image',
    });

    const onSubmitForm = (data) => {
        console.log(data);

    // const payload = {
    //   customerName: data.name,
    //   customerEmail: data.email,
    //   customerCity: data.city,
    //   delivery: data.delivery,
    //   wrap: data.wrap,
    // };

    // axios
    //   .post("http://localhost:3000/booking", payload)
    //   .then(() => {
    //     alert("Successfully made a new booking!");
    //     reset();
    //   })
    //   .catch((error) => console.log(error));
    };

    return (
        <section className="content z-0 my-[4vh] max-w-[80%] m-auto flex flex-col gap-[4vh] sm:gap-[3vh] sm:my-[3vh]">
            <h1 className="text-3xl font-semibold">Add Product</h1>
            <form
                className="flex flex-col gap-4 mt-4"
                onSubmit={handleSubmit(onSubmitForm)}
            >
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        placeholder="Name"
                        className="w-full rounded-lg border-[1px] border-gray-400 p-4 pe-12 text-sm focus:outline-black"
                        {...register("name")}
                        id="name"
                    />
                    <p className="error text-red-500">{errors.name?.message}</p>
                </div>

                <div>
                    <p>Image</p>
                    {image.map((image, index) => (
                        <div key={image.id} className="flex gap-4 mb-2 items-center">
                            <input
                                className="rounded-lg border-[1px] border-gray-400 p-4 w-[40%] text-sm focus:outline-black"
                                {...register(`images.${index}`)}
                                placeholder="Image Link"
                            />
                            <button className="rounded-lg bg-red-400 p-2 text-white self-center hover:bg-red-600" type="button" onClick={() => removeImage(index)}>
                                Remove
                            </button>
                            <p className="error text-red-500">{errors.images && errors.images[index]?.message}</p>
                        </div>
                    ))}
                    <button type="button" className="rounded-lg bg-first hover:bg-yellow-600 p-2 mt-4 text-white self-center" onClick={() => appendImage({ colorName: '', hexCode: '' })}>Add Image</button>
                    <p className="error text-red-500">{errors.images?.message}</p>
                </div>

                <div>
                    <label htmlFor="category">Category</label>
                    <select
                        placeholder="Category"
                        className="p-4 pe-12 w-full rounded-lg border-[1px] border-gray-400 text-gray-700 sm:text-sm"
                        {...register("category")}
                        id="category"
                    >
                        <option value="">Please select</option>
                        <option value="best seller">Best Seller</option>
                        <option value="autumn">Autumn</option>
                        <option value="winter">Winter</option>
                        <option value="daily">Daily</option>
                    </select>
                    <p className="error text-red-500">{errors.category?.message}</p>
                </div>

                <div>
                    <label htmlFor="price">Price</label>
                    <input
                        placeholder="Price"
                        className="w-full rounded-lg border-[1px] border-gray-400 p-4 pe-12 text-sm focus:outline-black"
                        {...register("price")}
                        id="price"
                    />
                    <p className="error text-red-500">{errors.price?.message}</p>
                </div>

                <div>
                    <p>Color</p>
                    {color.map((color, index) => (
                        <div key={color.id} className="flex gap-4 mb-2">
                            <input
                                className="rounded-lg border-[1px] border-gray-400 p-4 pe-12 text-sm focus:outline-black"
                                {...register(`colors.${index}.colorName`)}
                                placeholder="Color Name"
                            />
                            <input
                                className="rounded-lg border-[1px] border-gray-400 p-4 pe-12 text-sm focus:outline-black"
                                {...register(`colors.${index}.hexCode`)}
                                placeholder="Hex Code"
                            />
                            <button className="rounded-lg bg-red-400 p-2 text-white self-center hover:bg-red-600" type="button" onClick={() => removeColor(index)}>
                                Remove
                            </button>
                            {errors.colors && errors.colors[index] && (
                                <div>
                                {errors.colors[index].colorName && (
                                    <p className="error text-red-500">{errors.colors[index].colorName.message}</p>
                                )}
                                {errors.colors[index].hexCode && (
                                    <p className="error text-red-500">{errors.colors[index].hexCode.message}</p>
                                )}
                                </div>
                            )}
                        </div>
                    ))}
                    <button type="button" className="rounded-lg bg-first p-2 mt-4 hover:bg-yellow-600 text-white self-center" onClick={() => appendColor({ colorName: '', hexCode: '' })}>Add Color</button>
                </div>

                <div>
                <p>Sizes</p>
                    <div className="flex gap-4">
                        <label className="flex gap-2">
                            <input className="w-5 h-5" type="checkbox" {...register('sizes')} value="S" />
                            S
                        </label>
                        <label className="flex gap-2">
                            <input className="w-5 h-5"  type="checkbox" {...register('sizes')} value="M" />
                            M
                        </label>
                        <label className="flex gap-2">
                            <input className="w-5 h-5"  type="checkbox" {...register('sizes')} value="L" />
                            L
                        </label>
                        <label className="flex gap-2">
                            <input className="w-5 h-5"  type="checkbox" {...register('sizes')} value="L" />
                            XL
                        </label>
                    </div>
                    {errors.sizes && <p className="error text-red-500">{errors.sizes.message}</p>}
                </div>

                <div>
                    <label htmlFor="desc">Description</label>
                    <textarea
                        placeholder="Description"
                        className="w-full rounded-lg border-[1px] border-gray-400 p-4 pe-12 text-sm focus:outline-black"
                        {...register("desc")}
                        id="desc"
                    />
                </div>

                <button
                    className="mt-4 rounded-lg bg-first p-3 text-xl font-bold hover:bg-yellow-600 text-white self-center w-full"
                    type="submit"
                    >
                    Submit
                </button>
            </form>
        </section>
    );
}

export default CheckoutPage;
