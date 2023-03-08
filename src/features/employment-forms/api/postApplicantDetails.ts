import { useMutation } from 'react-query';
import type { AxiosResponse } from 'axios';

import { businessAxios } from '@/lib/axios';
import type { ApplicantDetailsDto } from '@/features/employment-forms';

interface ApplicationDetailsParameters {
  applicantDetailsDto: ApplicantDetailsDto;
  phoneNumber: string;
}

const postApplicantDetails = ({
  applicantDetailsDto,
  phoneNumber,
}: ApplicationDetailsParameters): Promise<AxiosResponse> => {
  return businessAxios.post(
    `/salesrep/verify/${phoneNumber}/`,
    applicantDetailsDto,
  );
};

export const usePostApplicantDetails = () => {
  return useMutation('postApplicantDetails', postApplicantDetails, {});
};
