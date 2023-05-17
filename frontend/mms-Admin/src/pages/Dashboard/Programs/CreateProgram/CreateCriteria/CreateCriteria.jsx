import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import cx from "classnames";
import styles from "./CreateCriteria.module.scss";
import { useNavigate } from "react-router-dom";
import backIcon from "@/assets/icons/back-icon.svg";
import Button from "@/components/Button/Button";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createProgramSchema } from "@/helpers/validation";

const CreateCriteria = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [displayInstructions, setDisplayInstructions] = useState(true);
  const [disableBtn, setDisableBtn] = useState({
    createCriteria: true,
    addCriteria: true
  });

  const handleDisplayInstructions = () => {
    setDisplayInstructions(false);
    setDisableBtn({ ...disableBtn, addCriteria: false });
  };

  const resolver = yupResolver(createProgramSchema);

  const defaultValues = {
    title: "",
    details: ""
  };

  const {
    handleSubmit,
    formState: { errors },
    control
  } = useForm({ defaultValues, resolver, mode: "all" });

  const handleCreateCriteria = (data) => {
    console.log(data);
  };

  return (
    <div className={cx(styles.createCriteriaContainer, "flexCol")}>
      <div className={cx(styles.heading, "flexRow-align-center")}>
        <img onClick={() => navigate(-1)} src={backIcon} className={cx(styles.backIcon)} alt='close-icon' />
        <h3 className={cx(styles.title)}>Criteria Setup</h3>
      </div>
      <div className={cx(styles.body, "flexCol")}>
        <form
          className={cx(styles.formContainer, "flexCol")}
          onSubmit={handleSubmit((data) => handleCreateCriteria(data))}
        >
          {displayInstructions && (
            <div className={cx(styles.instructions, "flexCol")}>
              <p>
                To be accepted as a mentor or a mentor manager, an applicant must provide relevant information and
                documents regarding their past experience(s). The criteria setup lets you create input fields for these
                information.
              </p>
              <Button onClick={() => handleDisplayInstructions()} title='Ok' type='primary' size='small' />
            </div>
          )}
          <div className={cx(styles.formHeader, "flexRow")}>
            <Button
              onClick={handleSubmit((data) => handleCreateCriteria(data))}
              title='Add Criteria'
              type='primary'
              size='small'
              disabled={disableBtn.addCriteria}
            />
          </div>

          <div className={cx(styles.formBody, "flexCol")}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ad quaerat repellat neque ipsa
              exercitationem, impedit, rem non, tempora architecto quia? Delectus atque temporibus quia vitae, ex quos
              nostrum quidem. Atque architecto, ut, nostrum consectetur quas ab in quasi tenetur cumque incidunt sequi,
              cum aperiam! Pariatur quis aut, numquam quos dolorum voluptatem, blanditiis perferendis corporis commodi
              possimus est aliquam quidem! Eius facere, laborum iure inventore nostrum sed dolores eveniet cupiditate
              minima vel quidem earum reiciendis repudiandae quod provident magni quae in, ab id! Fugit aperiam
              provident, culpa ex explicabo debitis! Odio, qui itaque cumque temporibus quo dignissimos fugiat maxime
              ipsum explicabo! Sint cum doloribus veniam maiores nam vel eveniet, iusto magni, nulla neque, id similique
              maxime dolor suscipit laboriosam hic. Aperiam culpa deleniti autem, natus ratione nam provident delectus
              velit quia, alias earum consequatur enim recusandae doloremque, in impedit distinctio veniam minima vero.
              Beatae itaque accusamus deleniti possimus cumque consequuntur! Ratione, debitis sint! Est animi
              accusantium nam maiores unde rem ex mollitia atque dolorem. Consectetur architecto quae accusamus,
              doloremque maxime ea placeat repudiandae laborum. Aliquid, libero. Explicabo sapiente doloribus
              temporibus. Dolorum culpa architecto animi itaque neque praesentium soluta consequatur. Veritatis, animi
              ut? Laborum minima blanditiis, repellat sunt, cum modi, beatae iure fugiat reiciendis reprehenderit quis
              temporibus eaque vel asperiores sed. Saepe consequatur repellendus ad illum aliquid. Quibusdam praesentium
              deserunt dolore mollitia accusamus, dolores tempora perferendis, quidem facere ea quo laboriosam id,
              inventore commodi porro pariatur aliquam ipsam libero asperiores animi? Cupiditate omnis impedit
              reiciendis. Porro eligendi fuga recusandae tempore facere quasi fugiat autem, itaque fugit animi neque
              maxime sit nemo rem ab accusamus? Ratione beatae quo quas, a pariatur iure! Commodi magni, eum et minus
              reiciendis velit distinctio magnam, blanditiis hic autem nihil voluptates excepturi corrupti totam veniam
              exercitationem. Exercitationem aperiam rerum obcaecati placeat tempore magnam voluptas ea natus quidem.
            </p>
            <div className={cx(styles.submitBtnDiv, "flexRow")}>
              <Button
                onClick={handleSubmit((data) => handleCreateCriteria(data))}
                // loading={loading}
                title='Create Criteria'
                type='primary'
                disabled={disableBtn.createCriteria}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCriteria;
