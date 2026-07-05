import { sql } from 'drizzle-orm'
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const reviews = sqliteTable('reviews', {
	id: text('id')
		.primaryKey()
		.$defaultFn(() => crypto.randomUUID()),
	filePath: text('file_path').notNull(),
	language: text('language').notNull(),
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
	severity: text('severity', {
		enum: ['critical', 'warning', 'suggestion']
	}).notNull(),
	lineNumber: integer('line_number'),
	message: text('message').notNull(),
	suggestion: text('suggestion').notNull()
})
