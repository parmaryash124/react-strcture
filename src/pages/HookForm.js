// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

// const schema = yup.object({
//   firstName: yup.string().required(),
//   age: yup.number().positive().integer().required(),
//   gender: yup.required(),
// });

// export default function HookForm() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//   });
//   const onSubmit = (data) => console.log(data);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input {...register("firstName")} />
//       <p>{errors.firstName?.message}</p>
//       <input {...register("age")} />
//       <p>{errors.age?.message}</p>
//       Gender: Male <input type="radio" {...register("gender")} />
//       {/* Female <input {...register("gender")} type="radio"/> <br></br> */}
//       <p>{errors.gender?.message}</p>
//       <input type="submit" />
//     </form>
//   );
// }