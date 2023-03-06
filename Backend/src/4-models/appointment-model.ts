import Joi from "joi";

class AppointmentModel {

    public appointmentId: number;
    public teamId: number;
    public startDateTime: Date;
    public endDateTime: Date;
    public description: string;
    public room: string;

    public constructor(appointment: AppointmentModel) {

        this.appointmentId = appointment.appointmentId;
        this.teamId = appointment.teamId;
        this.startDateTime = appointment.startDateTime;
        this.endDateTime = appointment.endDateTime;
        this.description = appointment.description;
        this.room = appointment.room;

    }

    private static validationSchema = Joi.object({
        description: Joi.string().required().min(4).max(256),
        room: Joi.string().required().min(1).max(30),
    });

    public validate(): string {
        const result = AppointmentModel.validationSchema.validate(this);
        return result.error?.message;
    };


}

export default AppointmentModel;