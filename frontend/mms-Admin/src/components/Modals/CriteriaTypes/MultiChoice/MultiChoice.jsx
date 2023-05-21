// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import PropTypes from "prop-types";
// import cx from "classnames";
// import ModalContainer from "../../ModalContainer/ModalContainer";
// import styles from "./MultiChoice.module.scss";
// import Button from "@/components/Button/Button";
// import InputField from "@/components/Input/Input";

// import { hideModal } from "@/redux/Modal/ModalSlice";
// import { useFieldArray, useForm, Controller } from "react-hook-form";

// import { saveCriteriaToStorage, getCriteriaFromStorage } from "@/redux/Criteria/CriteriaSlice";
// import addIcon from "@/assets/icons/add-icon.svg";
// import removeIcon from "@/assets/icons/minus-icon.svg";
// function MultiChoice({ show, size, modalName }) {
//   const dispatch = useDispatch();

//   const modalData = useSelector((state) => state?.modal?.modalData);
//   const criteria = useSelector((state) => state?.criteria?.getCriteriaFromStorageData);

//   useEffect(() => {
//     dispatch(getCriteriaFromStorage());
//   }, [dispatch]);

//   const handleClose = () => {
//     dispatch(hideModal({ name: "multiChoice" }));
//     dispatch(getCriteriaFromStorage());
//   };

//   const {
//     formState: { errors },
//     handleSubmit,
//     control
//   } = useForm({
//     defaultValues: {
//       criteria: [{ question: "", numberOfInputs: "", options: [{ option: "" }] }]
//     }
//   });
//   const { fields, append, remove } = useFieldArray({
//     name: "criteria",
//     control,
//     rules: {
//       required: "Please add at least one (1) question"
//     }
//   });

//   const handleCreateCriteria = (data) => {
//     console.log(data, "data");
//     // const newCriteria = {
//     //   ...criteria,
//     //   [modalData?.type]: [...criteria[modalData?.type], ...data.criteria]
//     // };
//     // dispatch(saveCriteriaToStorage(newCriteria));
//     // handleClose();
//   };

//   return (
//     <ModalContainer show={show} size={size} modalName={modalName}>
//       <div className={cx(styles.modalWrapper, "flexCol")}>
//         <div className={cx(styles.modalHeader, "flexCol")}>
//           <h6 className={cx(styles.headerTitle)}>Input Multiple Questions</h6>
//         </div>

//         <div className={cx(styles.modalBody, "flexCol")}>
//           <form
//             className={cx(styles.formContainer, "flexCol")}
//             onSubmit={handleSubmit((data) => handleCreateCriteria(data))}
//           >
//             {fields.map((field, index) => {
//               return (
//                 <section className={cx(styles.formGroup, "flexCol")} key={field.id}>
//                   <Controller
//                     name={`criteria.${index}.question`}
//                     control={control}
//                     rules={{ required: "Question is required" }}
//                     render={({ field }) => (
//                       <InputField
//                         {...field}
//                         placeholder='Enter question here'
//                         type='text'
//                         marginbottom='1.5rem'
//                         error={
//                           errors?.criteria && errors?.criteria[index] && errors?.criteria[index]?.question?.message
//                         }
//                       />
//                     )}
//                   />

//                   <Controller
//                     name={`criteria.${index}.numberOfInputs`}
//                     control={control}
//                     rules={{ required: "Number of inputs is required" }}
//                     render={({ field }) => (
//                       <InputField
//                         {...field}
//                         placeholder='Number of Inputs'
//                         type='number'
//                         marginbottom='1.5rem'
//                         error={
//                           errors?.criteria &&
//                           errors?.criteria[index] &&
//                           errors?.criteria[index]?.numberOfInputs?.message
//                         }
//                       />
//                     )}
//                   />

//                   {field?.options?.map((option, optionIndex) => {
//                     return (
//                       <div className={cx(styles.optionFormGroupDiv, "flexRow")} key={option.id}>
//                         <Controller
//                           name={`criteria.${index}.options.${optionIndex}.option`}
//                           control={control}
//                           rules={{ required: "Option is required" }}
//                           render={({ field }) => (
//                             <InputField
//                               {...field}
//                               placeholder='Enter option here'
//                               type='text'
//                               marginbottom='1.5rem'
//                               error={
//                                 errors?.criteria &&
//                                 errors?.criteria[index] &&
//                                 errors?.criteria[index]?.options &&
//                                 errors?.criteria[index]?.options[optionIndex]?.option?.message
//                               }
//                             />
//                           )}
//                         />
//                       </div>
//                     );
//                   })}

//                   <div
//                     onClick={() => {
//                       append(
//                         { option: "" },
//                         {
//                           shouldFocus: true,
//                           shouldUnregister: false
//                         }
//                       );
//                     }}
//                     className={cx(styles.appendOptionDiv, "flexRow-align-center")}
//                   >
//                     <img src={addIcon} alt='add-icon' />
//                     <span>Add another option</span>
//                   </div>

//                   <div className={cx(styles.deleteFormGroupDiv, "flexRow-align-right")}>
//                     <img onClick={() => remove(index)} src={removeIcon} alt='minus-icon' />
//                   </div>
//                 </section>
//               );
//             })}

//             {errors?.criteria?.root?.message && (
//               <p className={cx(styles.rootError, "flexRow")}>{errors?.criteria?.root?.message}</p>
//             )}

//             <div
//               onClick={() => {
//                 append({
//                   question: "",
//                   numberOfInputs: "",
//                   options: [{ option: "" }]
//                 });
//               }}
//               className={cx(styles.appendDiv, "flexRow-align-center")}
//             >
//               <img src={addIcon} alt='add-icon' />
//               <span>{errors?.criteria?.root?.message ? "Add question" : "Add another question"}</span>
//             </div>

//             <div className={cx(styles.btnGroup, "flexRow-space-between")}>
//               <Button onClick={handleClose} title='Cancel' type='secondary' />
//               <Button onClick={handleSubmit((data) => handleCreateCriteria(data))} title='Done' />
//             </div>
//           </form>
//         </div>
//       </div>
//     </ModalContainer>
//   );
// }

// MultiChoice.propTypes = {
//   show: PropTypes.bool,
//   size: PropTypes.string,
//   modalName: PropTypes.string
// };

// export default MultiChoice;

import React from "react";
import { useFieldArray, useForm, Controller } from "react-hook-form";

const NestedArrayExample = () => {
  const { control, handleSubmit, watch } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions" // Name of the nested array
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((question, questionIndex) => (
        <div key={question.id}>
          <Controller
            control={control}
            name={`questions[${questionIndex}].question`}
            defaultValue={question.question}
            render={({ field }) => <input {...field} placeholder='Question' />}
          />

          {question.options.map((option, optionIndex) => (
            <div key={option.id}>
              <Controller
                control={control}
                name={`questions[${questionIndex}].options[${optionIndex}].text`}
                defaultValue={option.text}
                render={({ field }) => <input {...field} placeholder='Option' />}
              />

              <button type='button' onClick={() => remove(`questions.${questionIndex}.options`, optionIndex)}>
                Remove Option
              </button>
            </div>
          ))}

          <button type='button' onClick={() => append(`questions.${questionIndex}.options`, { text: "" })}>
            Add Option
          </button>

          <button type='button' onClick={() => remove("questions", questionIndex)}>
            Remove Question
          </button>
        </div>
      ))}

      <button type='button' onClick={() => append("questions", { question: "", options: [] })}>
        Add Question
      </button>

      <button type='submit'>Submit</button>
    </form>
  );
};

export default NestedArrayExample;
