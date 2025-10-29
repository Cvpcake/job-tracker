import { Controller, Get } from '@nestjs/common';
import { PrismaService} from '../../infrastructure/prisma/prisma.service';

@Controller('health')
export class HealthController {
    constructor(private readonly prismaService: PrismaService) {}

    @Get()
    async healthCheck() {
        try {
            await this.prismaService.$queryRaw`SELECT 1`;

            return {
                status: 'OK',
                checks: {
                    app: 'UP',
                    db: 'UP',
                },
            };
        } catch (error) {
            return {
                status: 'ERROR',
                checks: {
                    app: 'UP',
                    db: 'DOWN',
                },
                details: {
                    message: error instanceof Error ? error.message : String(error),
                }
            }
        }
    }
}