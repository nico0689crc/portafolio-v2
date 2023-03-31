import { Button, CircularProgress, Stack, TextField, Typography } from "@mui/material";
import useSendContactMessage from "hooks/queries/useSendContactMessaage";
import { useTranslation } from "react-i18next";

const ContactForm = ({ form }) => {
  const { t } = useTranslation();
  const { register, handleSubmit, formState: { errors } } = form;

  const onSuccessHandler = () => {
    
  }

  const onErrorHandler = (data) => {
    
  }
  
  const { mutate, isLoading } = useSendContactMessage(onSuccessHandler, onErrorHandler);

  const onSubmitHandler = (data) => {
    mutate({data});
  }

  return (
    <Stack spacing={5}>
      <Typography variant="h4" alignSelf="center">{t('contact.title')}</Typography>
      <Stack spacing={5}>
        <TextField
          id="full_name"
          label={t("contact.full_name")} 
          {...register('full_name')}
          required
          error={!!errors.full_name}
          helperText={errors.full_name?.message}
        />
        <TextField
          id="contact_email"
          label={t("contact.contact_email")} 
          {...register('contact_email')}
          required
          error={!!errors.contact_email}
          helperText={errors.contact_email?.message}
        />
        <TextField
          id="message"
          label={t("contact.message")} 
          {...register('message')}
          required
          multiline
          rows={6}
          error={!!errors.message?.message}
          helperText={errors.message?.message}
        />
        <Stack alignItems="center">
          <Button
            type="submit"
            variant="contained"
            onClick={handleSubmit(onSubmitHandler)}
            disabled={isLoading}
            startIcon={isLoading ? <CircularProgress sx={{ width: '15px !important', height: '15px !important' }} color="inherit" /> : null}
          >
            {t("contact.submit")}
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default ContactForm;