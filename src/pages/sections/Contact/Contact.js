import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ContactForm from "./ContactForm";
import { Container } from "@mui/material";

const getFormSchema = (t) => {
  const formSchema = yup.object().shape({
    "full_name": yup
      .string().required(t("contact.validations.full_name_required")),
    "contact_email": yup
      .string().required(t("contact.validations.email_required"))
      .email(t("contact.validations.email_format")),
    "message": yup
      .string().required(t("contact.validations.message_required"))
      .min(50, t("contact.validations.message_min_length"))
  });

  const defaultValues = {
    "full_name": "Nicolas",
    "contact_email": "nico@g.com",
    "message": "earn other pay hill continent expression owner character catch split excited article national join led outer blank camera observe count film supper smooth equipment"
  };

  return {
    defaultValues,
    resolver: yupResolver(formSchema),
  };
};

const Contact = () => {
  const { t } = useTranslation();
  const form = useForm(getFormSchema(t));
  
  return (
    <Container maxWidth="sm">
      <ContactForm form={form}/>
    </Container>
  );
}

export default Contact;