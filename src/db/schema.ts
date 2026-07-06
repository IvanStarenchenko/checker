import { SEVERITY_ENUM } from '@/Const/ENUMS'
import { TCodeLanguage } from '@/interfaces/Settings.interface'
import { sql } from 'drizzle-orm'
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'
export const history = sqliteTable('history', {
	id: text('id')
		.primaryKey()
		.$defaultFn(() => crypto.randomUUID()),
	filePath: text('file_path').notNull(),
	createdAt: text('created_at')
		.default(sql`(CURRENT_TIMESTAMP)`)
		.notNull(),
	personaId: text('persona_id').notNull(),
	language: text('language').$type<TCodeLanguage>().notNull(),
	score: integer('score').notNull(),
	date: integer('date', { mode: 'timestamp' }).notNull()
})

export const reviews = sqliteTable('reviews', {
	id: text('id')
		.primaryKey()
		.$defaultFn(() => crypto.randomUUID()),
	filePath: text('file_path').notNull(),
	language: text('language').$type<TCodeLanguage>().notNull(),
	personaId: text('persona_id').notNull(),
	score: integer('score').notNull(),
	summary: text('summary').notNull(),
	codeBefore: text('code_before').notNull(),
	codeAfter: text('code_after').notNull(),
	createdAt: text('created_at')
		.default(sql`(CURRENT_TIMESTAMP)`)
		.notNull()
})

export const issues = sqliteTable('issues', {
	id: text('id')
		.primaryKey()
		.$defaultFn(() => crypto.randomUUID()),
	reviewId: text('review_id')
		.notNull()
		.references(() => reviews.id, { onDelete: 'cascade' }),
	severity: text('severity', { enum: SEVERITY_ENUM }).notNull(),
	lineNumber: integer('line_number'),
	message: text('message').notNull(),
	suggestion: text('suggestion').notNull()
})
