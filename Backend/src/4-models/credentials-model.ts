import Joi from "joi";

class CredentialsModel {
    public description: string;
    public room: string;

    constructor(credentials: CredentialsModel) {
        this.description = credentials.description;
        this.room = credentials.room;
    }

    private static validationSchema = Joi.object({
        description: Joi.string().required().min(4).max(256),
        room: Joi.string().required().min(1).max(30),
    });

    public validate(): string {
        const result = CredentialsModel.validationSchema.validate(this);
        return result.error?.message;
    };
}

export default CredentialsModel;